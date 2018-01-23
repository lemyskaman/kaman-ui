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

var RowView = core.CollectionView.extend({
    className: 'row',
    childViewClassName:'col',
    childView: function(){
        var _that=this;
        return ColView.extend({
            className:_that.childViewClassName
        })
    }
})

module.exports = {Col:ColView,Row:RowView};