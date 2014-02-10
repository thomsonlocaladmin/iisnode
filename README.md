PRODUCT API
============

PREREQUISITES
--------------

* Install Node and NPM
* Install node packages: "npm install"
* Install grunt "npm install -g grunt-cli"
* Install JSCoverage from : http://siliconforks.com/jscoverage/download.html


EXECUTING
----------

* npm start


TESTING
-------
* grunt test (mocha, jshint, jsonlint)
* grunt reports (coverage, plato)


ENVIRONMENTS
-------------
* The environment get set by the variable: "NODE_ENV".
* Different configuration settings can be set in config/[ENVIRONMENT].json
* If nothing set "development" will be the default.
* Common properties are set in default.json
* Possible environments are: development, testing, coverage, staging, production
