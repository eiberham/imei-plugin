var exec = require('cordova/exec');

var Imei =
{
    getImei : function(success) { return exec(success, null, "Imei", "imei", []); }
}

module.exports = Imei;
