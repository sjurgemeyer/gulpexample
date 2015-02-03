var gulp = require('gulp');
var eslint = require('gulp-eslint');
var express = require('gulp-express');
var del = require('del');
var taskListing = require('gulp-task-listing');
var mocha = require('gulp-mocha');

gulp.task('default', taskListing); 

gulp.task('server', function () {
  express.run({
    file: 'app.js'
  });
});

gulp.task('watch', function() {
  gulp.watch(['app/**/*.js'], express.run); 
});

gulp.task('lint', function() {
  return gulp.src(['app/**/*.js'])
        .pipe(eslint({
        envs: [
            'node'
        ],
        useEslintrc:true
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('test', function() {
    return gulp.src('spec/**/*Spec.js')
               .pipe(mocha({reporter: 'list'}));
});

gulp.task('check', ['lint', 'test'], function() {});
