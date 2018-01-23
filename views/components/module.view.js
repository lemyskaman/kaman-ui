var Radio = require('backbone.radio')
var PageView = require('./page.view');
var template = require('./templates/module.view.template.html')



var ModuleView = PageView.extend({
    name: '-',
    channelName: {},
    views: {},
    template: _.template(template),
    events: {
        'click @ui.header': 'onRender'
    },
    //overrriting the kaman-core constructor method
    initialize: function () {
        //giving all kaman functionalities
        this.kappInit();

        //now we make it radio Sensible to load views
        //dont forget always to add the this context
        Radio.channel(this.channelName).reply('show:view', this.showMainContentValidView, this)
    },

    /**
     * will render any view inside the content
     * 
     */
    showMainContentView: function (View) {//a maincontent loader shortcut
        console.log("showMainContentView")
        this.showChildView('mainContent', new View({expose_as:"moduleMainContentView"}))
        
        console.log('showMainContentView:   showed main content',)
    },
    showMainContentValidView: function (viewKeyName) {

        if (_.has(this.views, viewKeyName)) {
            this.showMainContentView(this.views[viewKeyName]())
            //this.showChildView('mainContent', new this.views[viewKeyName]())
        } else {
            throw 'module view showMainContentValidView error: ' + viewKeyName + ' Is not a valid view key for this module: ' + this.name;
        }

    },
    onRender: function () {

        this.ui.header.html(this.lang('module:example:name'))
        //this.showChildView('mainContent',n)
        this.showMainContentView(this.views.Index)
        
    }

});


module.exports = ModuleView