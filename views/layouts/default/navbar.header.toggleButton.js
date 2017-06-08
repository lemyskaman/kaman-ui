/**
 * Created by kdesktop on 05/06/17.
 */

var core = require('kaman-core');


module.exports = core.View.extend({

    tagName: 'button',
    className: 'navbar-toggle',

    template: _.template('<span class="sr-only"><%- caption %></span>' +
        '<span class="icon-bar"></span>' +
        '<span class="icon-bar"></span>' +
        '<span class="icon-bar"></span>'),
    attributes: {'data-target': '.navbar-collapse', 'data-toggle': "collapse"},


    templateContext: function(){
        console.log(this.langSource)
        return {
            caption:this.lang('kaman-ui:navbar:header:toggleButton:caption')
        }
    }

})

