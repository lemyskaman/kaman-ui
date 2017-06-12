var core = require('kaman-core');
var radio = require('backbone.radio')
var config = radio.channel('kaman:app').request('config');


///data definitions
var MenuItemModel = Backbone.Model.extend({
  defaults: {
    caption: ' - ',
    action: 'test-action',
    icon: 'fa-icon',
    status:false

  },
  parse: function(payload) {
    var toReturn = {};
    toReturn.caption = payload.caption || ' - ';
    toReturn.action = payload.action || 'test-action';
    toReturn.icon = payload.icon || 'fa-icon';
    toReturn.status=payload.status || false
    return toReturn;
  }
});

var SideMenuCollection = Backbone.Collection.extend({
  model: MenuItemModel,
});

//views definition
var SideMenuItemView = core.View.extend({

  tagName: 'li',
  template: _.template('<a <% if(status===true){ %>class="active"<% } %> data-toggle="collapse" data-target=".navbar-collapse.in"  ><i class="fa <%- icon %> fa-fw"></i><%- caption%></a>'),
  modelEvents: {
    change: 'render'
  },
  ui: {
    button: 'a'
  },
  events: {
    'click @ui.button': function(e) {
      e.preventDefault()
    } //just to avoid normal behaviur on lcik
  },
  triggers: {
    'click a': 'item:click'
  },

  /*onElementCLick:function(e){
    e.preventDefault()
      var action = this.model.get('action');
      if (config.get('debug')){
          console.log('from side item');
          console.log(this.model.get('action'))
      }
      radio.channel('KamanApp').request(this.model.get('action'),this.model)
      //mainViewChannel.request('sidebar:item:click',action);
  },*/


  initialize: function() {
    this.kappInit()

  },

})

var SideMenuView = Marionette.CollectionView.extend({
  id: 'side-menu',
  tagName: 'ul',
  className: 'nav',

  childView: SideMenuItemView,

});



module.exports = core.View.extend({
  channelName: 'ui',
  collection: new SideMenuCollection([{}, {}]),
  tagName: 'div',
  className: 'sidebar-nav navbar-collapse collapse',
  template: _.template('<div id="menu"></div>'),
  replaceableRegions: {
    menu: '#menu'
  },
  childViewEvents: {
    'item:click': 'itemClick'//felling the click on a side menu item
  },
  itemClick: function(childView) {

    console.log('element clicked');
    //find each item with a tru status and toggle it 
    _.each(this.collection.where({status:true}),function(e,k,l){
      e.set({status:false})
    },this)
    radio.channel('kaman:ui').request('navbar:sidebar:item:click',childView)
  },
  onRender: function() {
    this.showChildView('menu', new SideMenuView({
      collection: this.collection
    }))
  }


})
