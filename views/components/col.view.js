var core = require('kaman-core');

var ColView = core.View.extend({
    template: _.template('<div id="content"></div>'),
    replaceableRegions: {
        content: '#content'
    },
    onRender: function () {
        this.showChildView('content', new this.model.attributes.contentView())
    }
})

module.exports = ColView;
