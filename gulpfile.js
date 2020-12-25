'use strict';

const gulp = require("gulp")
const nodemon = require("gulp-nodemon")
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');
const node = require("nodemon")
const { join } = require("path")

sass.compiler = require('node-sass');

gulp.task('start', function (done) {
  nodemon({
    script: join(__dirname, "bin", "www.js"), 
    ext: 'js pug scss',
    ignore: ["./node_modules"],
    watch: ["./sass", "./public/stylesheets", "./"],
    env: { 'NODE_ENV': process.env.NODE_ENV || 'development' }, 
    done: done
  })
  .on('start', function() {
    gulp.src(join(__dirname, "sass", "*.scss"))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(join(__dirname, "public", "stylesheets")))
        .pipe(livereload({ start: true }))
  })
  .on('crash', function() {
    console.error("Crash!!!")
    node.emit('restart')
  })
})
