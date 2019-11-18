'use strict';

const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const USWDS_DIST = 'node_modules/uswds/dist';
const USWDS_DIST_DIR = path.join(__dirname, ...USWDS_DIST.split('/'));

gulp.task('copy-uswds-assets', () => {
  return gulp.src(`${USWDS_DIST}/@(js|fonts|img)/**/**`)
  .pipe(gulp.dest('./assets/vendor/uswds'));
});

gulp.task('sass', () => {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [
        path.join(USWDS_DIST_DIR, 'scss'),
      ]
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', gulp.series('sass', 'copy-uswds-assets'));

gulp.task('watch', gulp.series('default'), function(){
  return gulp.watch('./assets/sass/**/*.scss', ['sass']);
});
