/**
 * Created by lemys on 18/04/17.
 */


var _ = require('underscore');


var core = require('kaman-core')


var ModalTemplate = require('./templates/modal.view.template.html');


var ModalView = core.View.extend({

    bodyVIew:{},
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
        
        this.showChildView('body', this.bodyView);
    }




});

module.exports=ModalView;