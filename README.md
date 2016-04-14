# Boxfish Assets

The purpose of this package is to re-use css files across projects.

## Installation

First of all make sure you have Bower installed globally:

```shell
npm install -g bower
```

Then initialise Bower on your project:

```shell
bower init
```

This will begin a walkthrough to generate a `bower.json` file which is similar to NPM's `pacakage.json`. Likewise this file will store the bower dependencies and their versions.


Install this component using Bower:

```shell
bower install boxfish-assets --save
```

Install `grunt-wiredep` in your main project:
```shell
npm install grunt-wiredep --save-dev
```

`grunt-wiredep` will handle the insertion of packages installed via bower into your view templates.

Configure the `wiredep` task:
```javascript
// config/wiredep.js
module.exports = function(grunt) {

  grunt.config.set('wiredep', {
    task: {
      src: ['./views/layout.ejs'],
      ignorePath: '../assets',
      options: {}
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
};
```

To ensure bower knows where you `bower_components` are being stored, add a `.bowerrc` file to the root of your project and add the following:

```json
{
  "directory" : "./assets/bower_components"
}
```

To import the javascript and css files, add the following to your `layout.ejs` file:
```html
<!-- bower:css -->
<!-- endbower -->

<!-- bower:js -->
<!-- endbower -->
```

To import the sass files, first add the include path to your sass grunt config:
```javascript
module.exports = function(grunt) {
  grunt.config.set('sass', {
    dev: {
      options: {
        style: 'compressed',
        loadPaths: [
          'assets/bower_components/boxfish-assets/dist/scss'
        ]
      },
      files: [{
        expand: true,
        cwd: 'assets/sass/',
        src: ['**/*.scss'],
        dest: 'assets/stylesheets/',
        ext: '.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
};
```

Then simply `@import` the sass files you want:

```scss
@import "colors";
@import "variables";
@import "mixins";
```

## Running

To manually insert the bower dependencies to your view templates run: `grunt wiredep`.

## Contributing

This project uses Gulp for task automation. You will find a file called `gulpfile.babel.js` in the root of the project.

To execute gulp each time a sass file changes, use `gulp watch`

To execute gulp once, just use `gulp`

## Documentation

The docs can be view here: [Boxfish Assets](https://bxfsh.github.io/boxfish-assets)

The files for the docs are located in `/docs`.

To run the docs locally:

`npm run docs:serve`

To build the production docs:

`npm run docs:build`

To deploy the new changes:

`npm run docs:deploy`
