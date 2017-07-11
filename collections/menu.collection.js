var uiModels = require('./../models');

var MenuItemModel = uiModels.menu


module.exports = Backbone.Collection.extend({
  model: MenuItemModel,
});