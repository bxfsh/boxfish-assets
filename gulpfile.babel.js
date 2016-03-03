import gulp from 'gulp';
import sass from 'gulp-sass';
import sassdoc from 'sassdoc';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import cssmin from 'gulp-cssmin';

const sassOptions = {
  outputStyle: 'expanded',
};

const cssFileName = 'boxfish-assets.css';

// Sass task
gulp.task('sass', () => {
  return gulp.src('./sass/importer.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(rename(cssFileName))
    .pipe(gulp.dest('./dist/css'));
});

// Watch Task
gulp.task('sass:watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

// Compiles sass docs
gulp.task('sassdoc', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sassdoc());
});

// Autoprefixer task
gulp.task('autoprefixer', ['sass'], () => {
  return gulp.src(`dist/css/${cssFileName}`)
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9'],
      cascade: false,
    }))
		.pipe(gulp.dest('dist/css'));
});

// Minify css task
gulp.task('cssmin', () => {
  return gulp.src(`dist/css/${cssFileName}`)
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

// Default Task
gulp.task('default', ['sass', 'autoprefixer', 'cssmin', 'sass:watch']);

// Production Task
gulp.task('build', ['sass', 'autoprefixer', 'cssmin']);
