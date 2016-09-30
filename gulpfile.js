var gulp = require('gulp'),
    browserify = require('browserify'),
    tsify = require('tsify'),
    source = require('vinyl-source-stream'),
    babelify = require('babelify'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    buffer = require('vinyl-buffer'),
    gulpif = require('gulp-if'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    config = require('./config.json');

// Moves resources to dist folder
gulp.task('template', function () {
    return gulp.src(config.path.track.template)
        .pipe(gulp.dest(config.path.dist.root));
});

// Images
gulp.task('img', function () {
    return gulp.src(config.path.track.img)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(config.path.dist.img));
});

gulp.task("lib", function () {
    return gulp.src(config.path.track.lib,
        { cwd: config.path.track.node })
        .pipe(gulp.dest(config.path.dist.lib));
});

gulp.task("i18n", function () {
    return gulp.src(config.path.track.i18n)
        .pipe(gulp.dest(config.path.dist.i18n));
});

//Compile typescript
gulp.task('compile', function () {
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
        .pipe(gulpif(config.prod, sourcemaps.init({ loadMaps: true })))
        .pipe(gulpif(config.prod, uglify()))
        .pipe(gulpif(config.prod, sourcemaps.write('./')))

        .pipe(gulp.dest(config.path.dist.js));
});

// Compile SASS
gulp.task('sass', function () {
    return gulp.src(config.path.src.scss)
        .pipe(gulpif(config.prod, sourcemaps.init({ loadMaps: true })))
        .pipe(sass(config.prod ? { outputStyle: 'compressed' } : undefined)
        .on('error', sass.logError))
        .pipe(concat(config.path.bundle.css))
        .pipe(gulpif(config.prod, sourcemaps.write('./')))
        .pipe(gulp.dest(config.path.dist.css));
});

gulp.task('watch', function () {
    gulp.watch(config.path.track.ts, ['compile']);
    gulp.watch(config.path.track.template, ['template']);
    gulp.watch(config.path.track.scss, ['sass']);
    gulp.watch(config.path.track.img, ['img']);
    gulp.watch(config.path.track.i18n, ['i18n']);
});

gulp.task('build:app', ['compile', 'template', 'sass', 'img', 'i18n']);
gulp.task('build:all', ['lib', 'build:app']);
gulp.task('default', ['build:all']);