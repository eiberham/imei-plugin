package com.vivace.plugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONException;
import android.content.Context;
import android.telephony.TelephonyManager;

public class Imei extends CordovaPlugin{
	private static final String 		IMEI = "imei";
	
	public Imei(){}
	
	@Override
	public boolean execute(String action, CordovaArgs args,
			CallbackContext callbackContext) throws JSONException {
		// TODO Auto-generated method stub
		PluginResult.Status status = PluginResult.Status.OK;
        String imei = "";
        		
		if(action.equals(IMEI)){
			TelephonyManager tm = (TelephonyManager) cordova.getActivity().getSystemService(Context.TELEPHONY_SERVICE);
	        imei = tm.getDeviceId();
	        
		}else{
			status = PluginResult.Status.INVALID_ACTION;
		}
		
		PluginResult result = new PluginResult(status, imei);
		result.setKeepCallback(true);
		callbackContext.sendPluginResult(result);
		
        return true;
	}
}
