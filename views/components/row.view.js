var core  = require('kaman-core');
var ColView = require('./col.view');
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
module.exports=RowView;
