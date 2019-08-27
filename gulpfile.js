var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync'); 

/*gulp.task('myTask', function(){
    return gulp.src('source-files')
    .pipe(plugin())
    .pipe(gulp.dest('folder'))
}) */

gulp.task('less', function(){
    return gulp.src('app/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
})



gulp.task('watch', function(){
  gulp.watch('app/less/**/*.less', ['less']) 
  // другие ресурсы
})

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: "app",
            index: 'app/index.html',
            directory: true
            },

            notify: false
    });
})


