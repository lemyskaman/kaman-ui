var core = require('kaman-core');



module.exports = core.View.extend({
  id: 'page-wrapper',
  tagName: 'div',
  template: _.template(
    '<div class="row">'+
      '<div class="col-lg-12">'+
        '<h1 class="page-header" ></h1>'+
      '</div>'+
    '</div>' +
    '<div class="row" id="main-content"></div>'),
  replaceableRegions: {
    mainContent: '#main-content'
  },

  ui: {
    header: '.page-header'
  }


})
