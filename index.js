(function(global, factory){
	"use strict";

    factory(global, true);

})(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
    var jQuery = function(select){
        return new init(select);
    };
    var init = function(select){
        if(!select){
            return this;
        }
        else if(typeof select === "string"){
            
        }
        else if(select.nodeType){
            this[0] = select;
            this.length = 1;
            return this;
        }
    }
    window.$ = window.jQuery = jQuery;
    return jQuery;
});