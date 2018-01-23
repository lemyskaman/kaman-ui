//var Mn = require("backbone.marionette");
var core  = require("kaman-core")
var DisabledBehavior = core.Behavior.extend({//Mn.Behavior.extend({
    
    initialize: function () {

        //define some events
        this.on("disabled:set", this.setDisabled);
        this.on("disabled:toggle", this.toggleDisabled);
        //allowing to acces some behaviors methods directly from view
        this.bindMethods(["setDisabled","toggleDisabled"]);
        this.setDisabled(this.view.getOption("disabled") || false);
        console.log("disabled behavior initialized for :",this.view.options);

    },

    setDisabled: function (disabled) {
        console.log("set disabled trigered")
        if (typeof disabled === "boolean") {
            this.view.disabled = disabled
            this.changeDisabled();
        }else {
            throw {
                message: "non boolean disabled value",
                view: this.view
            }
        }
    },
    toggleDisabled: function () {
        //we toggle the view disabled option 
        this.view.disabled = this.view.getOption("disabled") ? false : true;
        this.changeDisabled();
    },
    changeDisabled: function () {
        console.log(this)
        if (this.view.isRendered() ) {
            console.log('button disabled change')
            switch (this.view.getOption("disabled")) {
                case false:
                    this.view.$el.removeClass('disabled')
                    break;
                case true:
                    this.view.$el.addClass('disabled');
                    break
            }
        }
    }
})

module.exports = DisabledBehavior;