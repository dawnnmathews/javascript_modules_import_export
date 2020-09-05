# Application code


Splitting code into logical modules, having a seperate module for certain functionality.
Calling these modules when required.
Module is a javascript file with a certain functionality.

---

# Notes - CommonJS, AMD ( Asynchronous Module Definition )

require() -- doesn't exist in browset/client-side javascript

client side implementation of CommonJS - browserify(supports nodejs modules in browser), webpack(to bundle js, css, etc), rollup(supports tree shaking, es6 modules)

client side implementation of AMD - RequireJS