var core = require('kaman-core');
var Loren = require('./loren.view.js')
var ColView = core.View.extend({
    template: _.template('<div id="content"></div>'),
    replaceableRegions: {
        content: '#content'
    },
    onRender: function () {
        console.log('col view model')
    	console.log(this.model)
    	
        this.showChildView('content', new this.model.attributes.content())
    }
})

module.exports = ColView;
