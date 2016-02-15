const gulp = require('gulp');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('default', ()=> {
  gulp.src('src/script.js')
    .pipe(babel({
      presets: ['es2015']
      }))
    .pipe(gulp.dest('dist'));
  gulp.src('_site/css/main.css')
    .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
    .pipe(gulp.dest('_site/css'));
});

gulp.task('watch', ()=> {
  gulp.watch(['src/script.js'], ['default']);
});

