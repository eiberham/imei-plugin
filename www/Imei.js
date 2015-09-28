var exec = require('cordova/exec');

var Imei =
{
    getImei : function() { return exec(function(imei){return imei;}, null, "Imei", "imei", []); }
}

module.exports = Imei;
