const gulp = require('gulp')
const browserify = require('browserify')
const tsify = require('tsify')
const source = require('vinyl-source-stream')
const babelify = require('babelify')
const gutil = require('gulp-util')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const buffer = require('vinyl-buffer')
const gulpif = require('gulp-if')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const config = require('./config.json')
const merge = require('merge-stream')

// Moves resources to dist folder
gulp.task('template', () => {
  return gulp.src(config.path.track.template)
    .pipe(gulp.dest(config.path.dist.root))
})

// Images
gulp.task('img', () => {
  return gulp.src(config.path.track.img)
    .pipe(rename({
      dirname: ''
    }))
    .pipe(gulp.dest(config.path.dist.img))
})

gulp.task("lib", () => {
  let lib = gulp.src(config.path.track.lib, {
      cwd: config.path.track.node
    })
    .pipe(gulp.dest(config.path.dist.lib))

  let localLib = gulp.src(config.path.track.localLib, {
      cwd: config.path.track.local
    })
    .pipe(gulp.dest(config.path.dist.lib))

  return merge(lib, localLib)
})

//Compile typescript
gulp.task('compile', () => {
  return browserify(config.browserify)
    .plugin(tsify)
    /* 
     * Options like "extensions" is additional babelify 
     * option, see "config.json",
     * all options from http://babeljs.io/docs/usage/options/ 
     * needs to put in the .babelrc file
     */
    .transform(babelify, config.babelify)
    .bundle()
    .on('error', gutil.log)
    .pipe(source(config.path.bundle.js))

  .pipe(gulpif(config.prod, buffer()))
    .pipe(gulpif(config.prod, sourcemaps.init({
      loadMaps: true
    })))
    .pipe(gulpif(config.prod, uglify()))
    .pipe(gulpif(config.prod, sourcemaps.write('./')))

  .pipe(gulp.dest(config.path.dist.js))
})

// Compile SASS
gulp.task('sass', () => {
  return gulp.src(config.path.src.scss)
    .pipe(gulpif(config.prod, sourcemaps.init({
      loadMaps: true
    })))
    .pipe(sass(config.prod ? {
        outputStyle: 'compressed'
      } : undefined)
      .on('error', sass.logError))
    .pipe(concat(config.path.bundle.css))
    .pipe(gulpif(config.prod, sourcemaps.write('./')))
    .pipe(gulp.dest(config.path.dist.css))
})

gulp.task('watch', () => {
  gulp.watch(config.path.track.ts, ['compile'])
  gulp.watch(config.path.track.template, ['template'])
  gulp.watch(config.path.track.scss, ['sass'])
  gulp.watch(config.path.track.img, ['img'])
})

gulp.task('build:app', ['compile', 'template', 'sass', 'img'])
gulp.task('build:all', ['lib', 'build:app'])
gulp.task('default', ['build:all'])