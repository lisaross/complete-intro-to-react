# A Complete Intro to React

## Notes

### Prettier

* reformats code on save to match coding standards
* doesn't work if code isn't first valid for the language
* formatter only - doesn't check for style

### eslint

* looks for functions/style

### airbnb

* configuration of eslint

# Webpack

* bundler that makes code into a single bundle
* cant' use es6 modules yet - node doesn't recognize it
* context - run from root directory (dirname)
* entry - main js file - front door to project
* devtool - sourcemaps are inlined in dev but aren't included in prod
* sourcemaps - pre-transpiled code so it's readable -- these are HUGE - remove for production
* resolve - order of operations - which file first
* /\.jsx?$/  - will be js OR jsx
* loader babel
* or loaders array
* bigger package - babel adding polyfills etc

# Babel

* transpiles javascript to desired version (ie. can make ie able to read es6)
* presets are groups of plugins
* env - autoprefixer for javascript (pick your browsers)
* loose: true --> loose mode, doesn't do super crazy stuff for edge cases (smaller code for non-edge cases) -- potential for breakage here so turn off if something isn't working
  ** makes bundle larger
* modules false - webpack will take care of modules, babel will ignore (import react from react is a module)
** this enables treeshaking in webpack
