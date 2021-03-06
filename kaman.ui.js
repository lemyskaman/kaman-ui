var core = require('kaman-core')
var Promise = require('bluebird')
var radio = require('backbone.radio')
var views = require('./views');
var models = require('./models')
var Marionette = require('backbone.marionette')
var config = radio.channel('kaman:app').request('config');


var uiCollections = require('./collections');
var menu_collection = new uiCollections.menu([{}, {}, {}]);


var notify = $.notify

var UiObject = Marionette.Object.extend({


  channelName: 'kaman:ui',

  radioRequests: {

    'bootstrap-notify': notify,
    'notify': 'uiNotify',

//    'modules:display:region': function () { return this.mainView.getRegion('page') },

    'menu': function () {

      return menu_collection
    },
    'menu:item:click': '_sidebarMenuItemClick',

    'modal:set': 'set_modal',
    'modal:show': function () {
      this.mainView.show_modal()
    }, //as the mechanism to show the modal is part of the mainview
    'modal:hide': function () {
      this.mainView.hide_modal()
    } //also the machanis to hide it is part of the mainview


  },

  build_menu:function(){
    return _.map(this.appChannel.request('modules'), function (v, k) {
      return _.pick(v, 'caption', 'name', 'icon')
    });
  
  },
  set_modal: function (title, body) { // as modal should be cosntructed from the mainview holder object

    return this.mainView.set_modal(
      views.components.Modal.extend({
        body: body

      })
    ).ui.label.html(title)


  },

  uiNotify: function (message, type) {

    notify({
      message: message,
      allow_dismiss: true
    }, {
        delay: '5000',
        type: type
      });
  },

  _sidebarMenuItemClick: function (sidebarItemObject) {
    this.appChannel.request('module:show', sidebarItemObject.model.get('name'))
  },

  _MainView: views.Layout.extend(),//adding the MainVIew as a constructor will provide the ability to change it and extend it


  set_mainView: function (view) {
    if (config.get('debug'))
      console.log(this.name + ':\nsetting main View for ')
    if (view && view instanceof Backbone.View) {
      this.mainView = view
    } else {
      this.mainView = new this._MainView({
        name: 'kaman UI  default layout view',
        langSource: this.langSource
      }),
        console.warn(this.name + ':\ndefault layout view is seted as main view')
    }
    return this.mainView
  },
  kamanInit: function () {
    this.mergeOptions(this.options, _.keys(this.options))
  },
  initialize: function () {

    this.kamanInit()

    console.log('kamanui object menu elements', this.sidebarMenuItems)
    if (config.get('debug'))
      console.log(this.name, this.langSource)
    this.set_mainView(new this._MainView({

      name: 'kaman UI  default layout view',
      langSource: this.langSource
    }));

    menu_collection.reset(this.build_menu())

    //listenning kaman:app notify event and bind it with this notifications for kaman:app
    radio.channel("kaman:app").on("notify",this.uiNotify)
    
  }

})
module.exports = UiObject
