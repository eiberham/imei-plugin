var exec = require('cordova/exec');

var Imei =
{
    getImei : function() { return exec(success, null, "Imei", "imei", []); }
}

module.exports = Imei;
