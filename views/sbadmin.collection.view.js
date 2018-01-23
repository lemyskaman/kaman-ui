var core  = require('kaman-core');

var SbadminView=core.CollectionView.extend({
    initilize:function(opt){
        this.kappInit()
        this.sbadmin_element_name = this.view.getOption("sbadmin_element_name") || this.view.className.split(" ")[0]

    }
})

module.exports = SbadminView;