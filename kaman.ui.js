var core = require('kaman-core')
var Promise = require('bluebird')
var radio = require('backbone.radio')
var views = require('./views')

var config = radio.channel('KamanApp').request('config');


var notify = $.notify




var MainView =views.layouts.Default.extend({

});


var UiObject = Marionette.Object.extend({


    channelName: 'KamanUi',

    radioRequests: {

        'bootstrap-notify': notify,
        'notify': 'uiNotify',
        'modal:set': 'set_modal',
        'modal:show': function () { this.mainView.show_modal() },//as the mechanism to show the modal is part of the mainview
        'modal:hide': function () { this.mainView.hide_modal() }//also the machanis to hide it is part of the mainview

    },
    set_modal:function(title, body) { // as modal should be cosntructed from the mainview holder object

        return this.mainView.set_modal(
            views.components.Modal.extend({
                bodyView: body,

            })
        ).ui.label.html(title)


    },

    uiNotify: function (message, type) {

        notify(
            {
                message: message,
                allow_dismiss: true
            },
            {
                delay: '5000',
                type: type
            });
    },


    mainView:new MainView(),//(function(){return   new MainView({langSource:this.langSource}) })() ,
    kamanInit: function () {
        return core.Functions.backboneOptsAsProps(this)
    },
    set_mainView: function (view) {
        if (config.get('debug'))
            console.log(this.name + ':\nsetting main View for ')
        if (view && view instanceof Backbone.View) {
            this.mainView = view
        } else {
            this.mainView = new  new MainView(),
            console.warn(this.name + ':\ndefault layout view is seted as main view')
        }
        return this.mainView
    },
    initialize: function () {
        this.kamanInit()
            .then(function () {
                if (config.get('debug'))
                    console.log(this.name + ' object initializing' )


            }.bind(this))
    }

})
module.exports = UiObject
