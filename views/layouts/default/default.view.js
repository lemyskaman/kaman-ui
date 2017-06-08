
var core = require('kaman-core');
var NavBar=require('./navbar.view');
var MainViewTemplate = require('./templates/main.view.template.html');



//var SideMenuView


var DefaultLayoutView = core.View.extend({
    /*
    channelName:'ui',
    radioRequests: {
        'set:modal':'set_modal',
        'show:modal': 'show_modal'
    },
    */
    
    name:'sbadmin2 default layout view',
    tagName: 'div',
    id: 'wrapper',
    template: _.template(MainViewTemplate),
    regions: {
        modal: '#app-modal'
    },
    ui: {
        modal: '#app-modal'
    },
    replaceableRegions: {
        navbar: '#navbar',
        page: '#page-wrapper'
    },
    NavBar:NavBar,
    set_modal:function(Modal){
        var modal=new Modal();
        this.showChildView('modal',modal);
        return this.getChildView('modal')
       
    },

    show_modal: function () {
        return this.ui.modal.modal('show');
       
    },
    hide_modal:function(){
        return this.ui.modal.modal('hide')
    },
    /*initialize:function(){
        console.log(this.getChannel());
        this.kappInit();
    }*/
    onRender:function(){


        this.showChildView('navbar',new this.NavBar({langSource:this.langSource}))
    }
})

module.exports = DefaultLayoutView;