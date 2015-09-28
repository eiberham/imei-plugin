var exec = require('cordova/exec');
//var channel = require('cordova/channel');

/*var Imei =
{
    getImei : function(success) {
        return exec(success, null, "Imei", "imei", []);
    }
}*/

/*channel.createSticky('onCordovaInfoReady');
channel.waitForInitialization('onCordovaInfoReady');*/

function Imei(){
    this.imei = null;
    exec(function(imei){
        this.imei = imei;}, null, "Imei", "imei", []);
    /*channel.onCordovaReady.suscribe(function(){
        exec(function(imei){
            console.log(imei);}, null, "Imei", "imei", []);
        channel.onCordovaInfoReady.fire();
    });*/
}

module.exports = new Imei();
//module.exports = Imei;
