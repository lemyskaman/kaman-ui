/**
 * Created by kdesktop on 05/06/17.
 */

var core = require('kaman-core');
var radio = require('backbone.radio');
var config = radio.channel('kaman:app').request('config');
var NavbarHeaderView = require('./navbar.header.view');
var Sidebar = require('./navbar.sidebar.view');
/*NAVBAR VIEW for sbadmin default layout
this view particualry holds the header at left, toplink at right and side bar as app main menu
 */
module.exports = core.View.extend({

    tagName: 'nav',
    name:'navbar View',
    className: 'navbar navbar-default navbar-static-top',
    attributes: {
        role: "navigation",
        style: "margin-bottom: 0"
    },

    template: _.template('<div id="navbar-header"></div><div id="navbar-top-links"></div><div class="navbar-default sidebar" role="navigation"></div>'),
    regions: {

        sidebar: '.sidebar'

    },

    replaceableRegions: {
        navbarToplinks: '#navbar-top-links',
        navbarheader:'#navbar-header'
    },
    onRender: function () {

        console.log('nav bar view render called',this.regions)

            this.showChildView('navbarheader', new NavbarHeaderView({langSource:this.langSource}) );
            this.showChildView('sidebar', new Sidebar({sidebarMenuItems:this.sidebarMenuItems}))
        /*
         this.showChildView('navbarHeader', new HeaderView());
         this.showChildView('sidebar', new Sidebar({
         collection: new Backbone.Collection(this.sideBarElements)
         }));*/
        //this.showChildView('navbarToplinks',new TopLinks());
    }


});
