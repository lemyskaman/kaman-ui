var PageView  = require('./page.view');

module.exports= PageView.extend({
    onRender: function () {
        this.ui.header.html(this.lang('module:name'));
        this.showMainContent(this.views.Index)
    },
    showMainContent: function (View) {//a maincontent loader shortcut
        this.showChildView('mainContent', new View())
    }
});



