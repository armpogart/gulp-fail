'use strict';
/* eslint-env node */

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

gulp.task('default', () =>
  gulp.src([
    'src/scripts/main.js',
  ])
    .pipe($.babel())
    .pipe(gulp.dest('dist/scripts'))
);
