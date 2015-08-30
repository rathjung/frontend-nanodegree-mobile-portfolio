// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css') ;
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var htmlreplace = require('gulp-html-replace');
var smoosher = require('gulp-smoosher');

var bases = {
    app: 'src/',
    dist: 'build/'
};

var paths = {
    script: ['js/*.js'],
    styles: ['css/*.css'],
    html: ['*.html'],
    images: ['img/*.jpg','img/*.png'],
    extras: ['README.md'],
    script2: ['views/js/*.js'],
    styles2: ['views/css/*.css'],
    images2: ['views/images/*.jpg','views/images/*.png'],
    html2: ['views/*.html'],
}

// Delete the dist directory
gulp.task('clean', function() {
    return gulp.src(bases.dist)
        .pipe(clean());
});

// Minify CSS
gulp.task('minifycss', ['clean'], function() {
    gulp.src(paths.styles, {cwd: bases.app})
        .pipe(minifycss())
        .pipe(gulp.dest(bases.dist + 'css/'));
    gulp.src(paths.styles2, {cwd: bases.app})
        .pipe(minifycss())
        .pipe(gulp.dest(bases.dist + 'views/css/'));
});

// Concatenate & Minify JS
gulp.task('scripts', ['clean'], function() {
    gulp.src(paths.script, {cwd: bases.app})
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(bases.dist + 'js/'));
    gulp.src(paths.script2, {cwd: bases.app})
        .pipe(uglify())
        .pipe(gulp.dest(bases.dist + 'views/js/'));
});

// Imagemin images and output them in dist
gulp.task('imagemin', ['clean'], function(){
    gulp.src(paths.images, {cwd: bases.app})
        .pipe(imagemin())
        .pipe(gulp.dest(bases.dist + 'img/'))
    gulp.src(paths.images2, {cwd: bases.app})
        .pipe(imagemin())
        .pipe(gulp.dest(bases.dist + 'views/images/'))
});

// Replace HTML
gulp.task('html', ['clean'], function(){
    gulp.src(paths.html, {cwd: bases.app})
        .pipe(smoosher())
        .pipe(htmlreplace({
            'js' : 'js/app.js'
        }))
        .pipe(gulp.dest(bases.dist));
});

// Copy all other files to dist directly
gulp.task('copy', ['clean'], function(){
    // Copy HTML
    gulp.src(paths.html2, {cwd: bases.app})
        .pipe(gulp.dest(bases.dist + 'views/'));
    // Copy Others
    gulp.src(paths.extras, {cwd: bases.app})
        .pipe(gulp.dest(bases.dist));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/**/*', ['scripts', 'copy']);
});

// Default Task
gulp.task('default', ['clean', 'minifycss', 'scripts', 'imagemin', 'html', 'copy']);