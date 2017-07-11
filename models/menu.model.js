///data definitions
module.exports= Backbone.Model.extend({
  defaults: {
    caption: ' - ',
    name: 'test-action',
    icon: 'fa-icon',
    status:false

  },
  // in case of some null properties we set for some defaults
  parse: function(payload) {
    console.log('parse',this.defaults)
    var toReturn = {};
    //todo: will be better to use regular expressions to avoid full witespaces strings
    toReturn.caption = payload.caption || ' -x- ';
    toReturn.name = payload.name || 'test-action';
    toReturn.icon = payload.icon || 'fa-icon';
    toReturn.status=payload.status || false;
    return toReturn;
  }
});