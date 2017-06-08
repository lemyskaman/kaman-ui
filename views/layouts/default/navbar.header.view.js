/**
 * Created by kdesktop on 05/06/17.
 */

var core = require('kaman-core');
var radio = require('backbone.radio')
var config = radio.channel('KamanApp').request('config');
var ToggleButtonView=require('./navbar.header.toggleButton')

module.exports = core.View.extend({

    tagName: 'div',
    name:'navbar header view',
    className: 'navbar-header',
    template: _.template('<div id="toggle-button"></div><div id="brand"></div>'),
    ToggleButtonView:ToggleButtonView,
    replaceableRegions: {
        toggleButton: '#toggle-button',
        brand: '#brand',

    },
    onRender: function () {
        var that = this;
        this.showChildView('toggleButton', new this.ToggleButtonView({langSource:this.langSource}));

       /* this.showChildView('brand', new simple.LinkView({
                caption: 'Titulo de Sistema',
                className: 'navbar-brand'
            })
        );*/

    }


})
;