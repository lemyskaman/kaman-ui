var core = require('kaman-core');

var ColView = core.View.extend({
    template: _.template('<div id="content"></div>'),
    replaceableRegions: {
        content: '#content'
    },
    onRender: function () {
        console.log("col content",this.getRegion("content"))
        console.log("contentn view",new this.model.attributes.contentView())
        this.showChildView('content', new this.model.attributes.contentView())
    }
})

module.exports = ColView;
