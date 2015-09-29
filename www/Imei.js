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
    this.number = null;

    /*channel.onCordovaReady.suscribe(function(){
        exec(function(imei){
            console.log(imei);}, null, "Imei", "imei", []);
        channel.onCordovaInfoReady.fire();
    });*/

    this.get(function(imei){
       this.number = imei;
    }, null);
}

Imei.prototype.get = function(successCallback, errorCallback){
    exec(successCallback, errorCallback, "Imei", "imei", []);
}

module.exports = new Imei();
//module.exports = Imei;
