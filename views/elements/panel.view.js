var core = require('kaman-core');
var ui = require('kaman-ui');
var template = require('./templates/panel.view.template.html')



var PanelView = core.View.extend({
	name:'panel view',
	className:'panel',
	tagName:'div',
	look:'Default',
	_aviableLooks:{
		'Default':'panel-default',
		'Primary':'panel-primary',
		'Success':'panel-success',
		'Info':'panel-info',
		'Warning':'panel-warning',
		'Green':'panel-green',
		'Yellow':'panel-yellow',
		'Red':'panel-red',		
	},
	ui:{
		heading:'.panel-heading',
		body:'.panel-body',
		footer:'.panel-footer'
	},
	regions:{
		heading:'.panel-heading',
		body:'.panel-body',
		footer:'.panel-footer'
	},
	templateContext:{
		heading:'heading',
		body:'body',
		footer:'body'
	},
	template:_.template(template),
	
	changeLook:function(look){

		var validLook =_.has(this._aviableLooks, look); 
		if (validLook){
			this.look=look;
			this.render();
		}
		return validLook

	},
	onRender:function(){
		this.$el.addClass(this._aviableLooks[this.look])
	},

});

module.exports=PanelView;