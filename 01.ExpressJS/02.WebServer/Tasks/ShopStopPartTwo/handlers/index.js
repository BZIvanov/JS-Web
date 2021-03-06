// we will keep all handlers here so we can export all them as an array, not 1 by 1
const homeHandler = require('./home');
const filesHandler = require('./static-files');
const productHandler = require('./product');
const errorHandler = require('./error');

module.exports = [homeHandler, filesHandler, productHandler, errorHandler];
