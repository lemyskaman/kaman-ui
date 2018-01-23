/**
 * Created by lemys on 18/04/17.
 */


var _ = require('underscore');

var Mn  = require('backbone.marionette')
var core = require('kaman-core')


var ModalTemplate = require('./templates/modal.view.template.html');


var ModalView = core.View.extend({

    body:{},
    template: _.template(ModalTemplate),

    ui: {
        label: '#modal-label',
        body: '.modal-body',
        footer: '.modal-footer'
    },
    regions:{
        body: '.modal-body',
        footer: '.modal-footer'
    },
    onRender:function(){
        if (this.body instanceof Mn.View){
            this.showChildView('body', this.bodyView);
        }else{
            this.ui.body.html(body)
        }
    }




});

module.exports=ModalView;