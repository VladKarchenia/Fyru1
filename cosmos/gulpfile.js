const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const del = require('del');

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
            baseDir: "dist"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('watcher', function() {
    gulp.watch('src/styles/**/*.scss', ['styles']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    del.sync('dist');
});

gulp.task('build', ['clean', 'styles'], function() {
    gulp.src(['src/index.html'])
    .pipe(gulp.dest('dist'));
    gulp.src(['src/img/*.png', 'src/img/*.jpg'])
    .pipe(gulp.dest('dist/img'));
    gulp.src(['src/script.js'])
    .pipe(gulp.dest('dist'));
    gulp.src(['src/fonts/*.ttf'])
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', ['build', 'watcher', 'browserSync']);
