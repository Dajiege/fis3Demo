var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', ['webserver'])

gulp.task('webserver', function () {
    connect.server({
        root: './output',
        port: 5000
    });
});