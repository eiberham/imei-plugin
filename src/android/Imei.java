package vivace.plugin.imei;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONException;
import android.content.Context;
import android.telephony.TelephonyManager;

public class Imei extends CordovaPlugin{
	private final static String 		IMEI = "imei";
	private String 						imei;
	
	public Imei(){}
	
	@Override
	public boolean execute(String action, CordovaArgs args,
			CallbackContext callbackContext) throws JSONException {
		// TODO Auto-generated method stub
		
		if(action.equals(IMEI)){
			TelephonyManager tm = (TelephonyManager) cordova.getActivity().getSystemService(Context.TELEPHONY_SERVICE);
	        this.imei = tm.getDeviceId();
	        
	        callbackContext.success(this.imei);
	        return true;
		}else{
			return false;
		}
	}
}
