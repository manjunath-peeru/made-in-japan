'use strict';

const gulp = require('gulp');

const argv = require('minimist')(process.argv.slice(2));

gulp.task('validate', () => {

  const token = argv.t || argv.token;
  if (!token) {
    throw new Error('token is required.');
  }
  process.env.token = token;
});
