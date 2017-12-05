var core = require('kaman-core');
var PageViewTemplate = require('./templates/page.view.template.html');
module.exports=core.View.extend({
    id: 'page-wrapper',
    tagName: 'div',
    template: _.template(PageViewTemplate),
    replaceableRegions: {
        mainContent: '#main-content'
    },

    ui: {
        header: '.page-header'
    }
})