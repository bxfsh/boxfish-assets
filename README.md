# Boxfish Assets

The purpose of this package is to re-use css files across projects.

## Installation

Install using Bower:

```shell
bower install boxfish-assets --save
```

Install `grunt-wiredep` in your main project:
```shell
npm install grunt-wiredep --save-dev
```

Configure the `wiredep` task:
```javascript
module.exports = function(grunt) {

  grunt.config.set('wiredep', {
    task: {
      src: ['./views/layout.ejs', './assets/sass/app.scss'],
      ignorePath: '../assets',
      options: {}
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
};
```

Only use the `ignorePath` option if your bower_components folder is located in the assets folder.

To import the javascript and css files, add the following to your `layout.ejs` file:
```html
<!-- bower:css -->
<!-- endbower -->

<!-- bower:js -->
<!-- endbower -->
```

To import the sass files, add the following to your main sass stylesheet:
```scss
// bower:scss
// endbower
```

## Contributing

This project uses Gulp for task automation. You will find a file called `gulpfile.babel.js` in the root of the project.

To execute gulp each time a sass file changes, use `gulp watch`

To execute gulp once, just use `gulp`

## Documentation

The docs can be view here: (Boxfish Assets)[https://bxfsh.github.io/boxfish-assets]

The files for the docs are located in `/docs`. To compile them, run:

```shell
cd docs
jekyll serve
```

This will run jekyll's watch command which will regenerated the site each time the docs change.

When you are finished editing the docs, use `jekyll build` to build the site and then push the docs to gh-pages using `npm run update-docs` from the parent directory.
