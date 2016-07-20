'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    del = require('del'),
    Config = require('./gulpfile.config'),
    browserSync = require('browser-sync'),
    superstatic = require('superstatic'),
    eslint = require('gulp-eslint'),
    hub = require('gulp-hub'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-sass'),
    merge = require('merge-stream'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps');
var production = false;
var config = new Config();
var karma = require('karma').server;
var browserify = require('browserify');
var _ = require('underscore');
var gutil = require('gulp-util');
var watchify = require('watchify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var mkdirp = require('mkdirp');
var Config = require('./gulpfile.config');
var gutil = require("gulp-util");
var webpack = require("webpack");
var sharedWebpackConfig = require('./webpack.config');
var _config = new Config();
var PATHS = {
    dest: _config.dist, 
    karmaConfig: path.resolve(__dirname, './karma.conf.js'),

    styles: {
        main: './src/scss/main.scss',
        all: './src/**/*.scss'
    }     
}; 

gulp.task('clean', function(cb) {
    return del([
        path.join(PATHS.dest, '/*')
    ], cb);
});

gulp.task('test', function() {
    return karma.start({
        configFile: __dirname + '/karma.conf.js'
    });
});

gulp.task('styles', function() {
    var stream = gulp.src(PATHS.styles.main);

    if (!production) {
        stream = stream.pipe(plumber())
            .pipe(sourcemaps.init({
                loadMaps: true
            }));
    }
    stream = stream.pipe(sass())

    if (!production) {
        stream = stream.pipe(sourcemaps.write('./', {
            includeContent: true,
            sourceRoot: './'
        }));
    }
    return stream.pipe(gulp.dest(path.join(PATHS.dest, '/css/')));
});
 

gulp.task('build', ['styles','webpack']);
 

gulp.task('build:all', function() {
    return gulp.start('build:all:dev');
});



gulp.task('build:all:dev', function(cb) {
    return runSequence('clean', ['build'],  'test', cb);
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(_.extend({},sharedWebpackConfig,{watch:false}), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('default', ['build:all']);
 