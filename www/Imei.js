var exec = require('cordova/exec');
var channel = require('cordova/channel');

/*var Imei =
{
    getImei : function(success) {
        return exec(success, null, "Imei", "imei", []);
    }
}*/

channel.waitForInitialization('onCordovaInfoReady');

function Imei(){
    this.imei = null;

    channel.onCordovaReady.suscribe(function(){
        exec(function(imei){
            this.imei = imei;}, null, "Imei", "imei", []);
    });
}

module.exports = new Imei();
//module.exports = Imei;
