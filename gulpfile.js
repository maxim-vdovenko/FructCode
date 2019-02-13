var gulp         = require('gulp'),
    //less         = require('gulp-less'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename');



gulp.task('sass', function(){
     return gulp.src('app/sass/styles.scss')
           .pipe(sass())
           //.pipe(cssnano()) 
           //.pipe(concat('bootstrap.css'))
           .pipe(gulp.dest('app/css'))
           .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function(){
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js'
    ])
    .pipe(gulp.dest('app/js'));
});

/*
gulp.task('libs-scripts', function(){
    return gulp.src([
         'app/libs/bootstrap/dist/js/bootstrap.min.js',
         'app/js/bootstrap-select.min.js',
         'app/js/jquery.scrollbar.min.js',
         'app/js/jquery.mask.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

gulp.task('libs-css', ['sass'], function(){
     return gulp.src([
          'app/libs/bootstrap-sass/slick/slick.css'
     ])
     .pipe(cssnano()) 
     .pipe(rename({basename: 'libs.min'})) 
     .pipe(gulp.dest('app/css'));
});
*/

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false // false
    });
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function(){
 
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    
    gulp.watch('app/images/**/*', browserSync.reload);
    gulp.watch('app/pictures/**/*', browserSync.reload);  
});

