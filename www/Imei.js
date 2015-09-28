var exec = require('cordova/exec');

var Imei =
{
    getImei : function() { return exec(null, null, "Imei", "imei", []); }
}

module.exports = Imei;
