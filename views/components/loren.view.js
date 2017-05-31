

var Template = require('./templates/loren.view.template.html')
module.exports = Backbone.Marionette.View.extend({
    tagName:'div',
    idName:'#loren',
    template: _.template(Template)
})