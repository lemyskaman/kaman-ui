/**
 * Created by kdesktop on 05/06/17.
 */

var core = require('kaman-core');
var radio = require('backbone.radio')
var config = radio.channel('kaman:app').request('config');

var ToggleButtonView=require('./navbar.header.toggleButton')

module.exports = core.View.extend({

    tagName: 'div',
    name:'navbar header view',
    className: 'navbar-header',
    model:config,
    /*templateContext:{
      'baseUrl':'#',
      'name':'Unamed Application'
    },*/
    template: _.template('<div id="toggle-button"></div><a class="navbar-brand" id="brand" href="<%- baseUrl %>"><%- name%></a></div>'),
    ToggleButtonView:ToggleButtonView,
    replaceableRegions: {
        toggleButton: '#toggle-button',
        brand: '#brand',

    },
    initialize:function(){
      this.kappInit();
      console.log('navbar header model',this.model.get('name'))
    },
    onRender: function () {
        var that = this;
        this.showChildView('toggleButton', new this.ToggleButtonView({
            name:'navbar toggle button view',
            langSource:this.langSource

        }));

       /* this.showChildView('brand', new simple.LinkView({
                caption: 'Titulo de Sistema',
                className: 'navbar-brand'
            })
        );*/

    }


})
;
