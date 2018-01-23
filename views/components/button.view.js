var core = require('kaman-core');
var Mn = require('backbone.marionette')
var behaviors = require('./../../behaviors')

var ActioncolorBehavior = behaviors.actioncolor.extend();
var DisabledBehavior  = behaviors.disabled.extend();


var Button = core.View.extend({
    tagName: 'button',
    
    behaviors: {
        disabled: DisabledBehavior//,
        //actioncolor: ActioncolorBehavior
    },
    attributes: {
        "type": "button"
    },
    templateContext: {
        caption: '-'
    },
    template: _.template('<%- caption %>'),
    className: "btn",


    //onDisabledGet() { console.log('se entrego el disabled') }



})

module.exports = Button;