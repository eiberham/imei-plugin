var exec = require('cordova/exec');

function Imei(){
    this.number = null;

    var self = this;
    self.get(function(imei){
        self.number = imei;
    }, null);
}

Imei.prototype.get = function(successCallback, errorCallback){
    exec(successCallback, errorCallback, "Imei", "imei", []);
}

module.exports = new Imei();
