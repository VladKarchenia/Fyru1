const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('styles', function() {
    return gulp.src('src/styles/main.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(prefix({ browsers: ['last 2 versions'] }))
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('dist'))
        .pipe(reload({stream:true}));
})

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('watcher', function() {
    gulp.watch('src/styles/**/*.scss', ['styles']);
});

gulp.task('default', ['watcher', 'browserSync']);




