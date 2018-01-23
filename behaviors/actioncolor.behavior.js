//var Mn  = require('backbone.marionette');
var core = require('kaman-core')


var ActioncolorBehavior = core.Behavior.extend({
    defaults: {
        validActioncolors: {
            default: "default",
            primary: "primary",
            success: "success",
            info: "info",
            warning: "warning",
            danger: "danger",
            green:"green",
            yellow:"yellow",
            red:"red",

        }

    },

    initialize: function () {
        console.log("intitialize: action color behavior for:", this.view);
        this.view.actioncolor = this.getOption("actioncolor") || this.getOption("validActioncolors").default;
        this.view.sbadmin_element_name = this.view.getOption("sbadmin_element_name") || this.view.className.split(" ")[0]


        //this.view.setActioncolor=this.setActioncolor.bind(this)
        this.bindMethods(["setActioncolor"]);
        //if we have setted a color we change it on rendering
        this.on("render", function () { this.changeActioncolor(this.view.getOption("actioncolor")) })
        //this.setActioncolor(this.getOption("actioncolor") || this.getOption("validActioncolors").default)
    },
    setActioncolor: function (color) {
        console.log("setActioncolor", this.view)
        if (_.has(this.getOption("validActioncolors"), color)) {
            console.log("setActioncolor: " + color + " is valid")
            this.changeActioncolor(color)
            //  this.triggerMethod("actioncolor:change", color)

        } else {
            throw {
                message: color + " is a not valid color ",
                view: this.view
            }
        }
    },
    changeActioncolor: function (color) {
        console.log("changeActioncolor", this.view)
        
        if (this.view.isRendered()) {
            console.log("changeActionColor:view.$el exits")
            var elementName = this.view.getOption("sbadmin_element_name");
            var oldElementColor = this.view.getOption("sbadmin_element_name") + "-" + this.view.getOption("actioncolor")
            var newElementColor = this.view.getOption("sbadmin_element_name") + "-" + color
            //if (oldElementColor !== newElementColor) {
                this.view.$el.removeClass(oldElementColor);
                this.view.actioncolor = color;
                this.view.$el.addClass(newElementColor);
            //}

        } else {
            throw { message: "you cant change an action color withou render the view first" }
        }
    }


});

module.exports = ActioncolorBehavior;