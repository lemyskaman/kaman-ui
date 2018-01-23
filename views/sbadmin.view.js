var core  = require('kaman-core');

var SbadminView=core.View.extend({
    initilize:function(opt){
        this.kappInit()
        this.sbadmin_element_name = this.getOption("sbadmin_element_name") || this.className.split(" ")[0]

    }
})
        
module.exports=SbadminView;