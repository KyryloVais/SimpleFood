const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const del = require("del");
const svgSprite = require("gulp-svg-sprite");
const browserSync = require("browser-sync").create();
const fileInclude = require("gulp-file-include");

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
    notify: false,
  });
}

function svgSprites() {
  return src("app/images/icons/*.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(dest("app/images"));
}
// expanded;
function styles() {
  return src("app/scss/style.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({ overrideBrowserslist: ["last 10 versions"], grid: true })
    )
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

const htmlInclude = () => {
  return src(["app/html/*.html"])
    .pipe(
      fileInclude({
        prefix: "@",
        basepath: "@file",
      })
    )
    .pipe(dest("app"))
    .pipe(browserSync.stream());
};

function scripts() {
  return src([
    "node_modules/jquery/dist/jquery.js",
    "node_modules/ion-rangeslider/js/ion.rangeSlider.js",
    "node_modules/jquery-form-styler/dist/jquery.formstyler.js",
    "node_modules/rateyo/src/jquery.rateyo.js",
    "app/js/main.js",
  ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function images() {
  return src("app/images/**/*.*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/images"));
}

function build() {
  return src([
    "app/**/*.html",
    "app/fonts/**/*.*",
    "app/css/*.css",
    "app/js/*.js",
    "app/images/**/*.*"
  ], {
    base: "app"
  }).pipe(dest("dist"));
}

function cleanDist() {
  return del("dist");
}

function watching() {
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
  watch(["app/**/*.html"]).on("change", browserSync.reload);
  watch(["app/images/icons/*.svg"], svgSprites);
  watch(["app/html/**/*.html"], htmlInclude);
}

exports.styles = styles;
exports.scripts = scripts;
exports.htmlInclude = htmlInclude;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.svgSprites = svgSprites;
exports.build = series(cleanDist, images, build);

exports.default = parallel(
  htmlInclude,
  styles,
  scripts,
  browsersync,
  watching,
  svgSprites
);
