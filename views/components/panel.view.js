var core = require('kaman-core');
var ui = require('kaman-ui');
var template = require('./templates/panel.view.template.html')
var behaviors = require('./../../behaviors')


var PanelView = core.View.extend({
	name: 'panel-view',
	className: 'panel',
	behaviors: {
        actioncolor: behaviors.actioncolor.extend()
	},
	lemys:"si",
	tagName: 'div',
	

	ui: {
		heading: '.panel-heading',
		body: '.panel-body',
		footer: '.panel-footer'
	},

	regions: {
		heading: '.panel-heading',
		body: '.panel-body',
		footer: '.panel-footer'
	},
	//replace
	templateContext: {
		heading: 'heading',
		body: 'body',
		footer: 'footer'
	},
	template: _.template(template),


});

module.exports = PanelView;