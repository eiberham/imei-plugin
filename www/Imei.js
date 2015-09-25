var exec = require('cordova/exec');

var Imei =
{
    imei : function() { return exec(null, null, "Imei", "imei", []); }
}

module.exports = Imei;
