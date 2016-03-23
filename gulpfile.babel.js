import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import cssmin from 'gulp-cssmin';
import gzip from 'gulp-gzip';

const sassOptions = {
  outputStyle: 'expanded',
};

const cssFileName = 'boxfish-assets.css';

// Sass to Css task
gulp.task('sass', () => {
  return gulp.src('./sass/importer.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(rename(cssFileName))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('export-sass', ['sass'], () => {
  return gulp.src('./sass/exports/**/*.scss')
    .pipe(gulp.dest('dist/scss'));
});

// Watch Task
gulp.task('sass:watch', () => {
  gulp.watch('./sass/**/*.scss', ['default']);
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
gulp.task('cssmin', ['autoprefixer'], () => {
  return gulp.src(`dist/css/${cssFileName}`)
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('exportDistToDocs', ['sass', 'export-sass', 'autoprefixer', 'cssmin'], () => {
  return gulp.src('dist/**/*')
    .pipe(gulp.dest('docs/dist'));
});

// Default Task
gulp.task('default', ['sass', 'export-sass', 'autoprefixer', 'cssmin', 'exportDistToDocs']);

// Watch Task
gulp.task('watch', ['sass:watch']);
