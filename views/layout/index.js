
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
        pageWrapper: '#page-wrapper'
    },
    NavBar:NavBar,
    set_modal:function(Modal){
        var modal=new Modal();
        this.showChildView('modal',modal);
        return this.getChildView('modal')
       
    },
    renderContent:function(View){
        this.showChildView('pageWrapper',new View());
    },
    show_modal: function () {
        return this.ui.modal.modal('show');
       
    },
    hide_modal:function(){
        return this.ui.modal.modal('hide')
    },
    initialize:function(){
        
        this.kappInit();
        console.log(this.name,this.langSource)
        
    },
    onRender:function(){


        this.showChildView('navbar',new this.NavBar({langSource:this.langSource}))
    }
})

module.exports = DefaultLayoutView;