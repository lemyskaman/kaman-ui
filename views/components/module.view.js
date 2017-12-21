var Radio = require('backbone.radio')
var PageView  = require('./page.view');
var template = require('./templates')
var ModuleView = PageView.extend({
    name:'-',
    channelName:{},
    views:{},
     //overrriting the kaman-core constructor method
     initialize: function () {
        //giving all kaman functionalities
        this.kappInit();

        //now we make it radio Sensible to load views
        //dont forget always to add the this context
        Radio.channel(this.channelName).reply('show:view',this.showMainContentValidView,this)
    },
    
    /**
     * will render any view inside the content
     * 
     */
    showMainContentView: function (View) {//a maincontent loader shortcut
        this.showChildView('mainContent', new View())
    },
    showMainContentValidView:function(viewKeyName){

        if (_.has(this.views,viewKeyName)){
            this.showChildView('mainContent', new this.views[viewKeyName]())
        }else{
            throw 'module view showMainContentValidView error: '+ viewKeyName+ ' Is not a valid view key for this module: '+this.name;
        }

    }
    
});


module.exports=ModuleView