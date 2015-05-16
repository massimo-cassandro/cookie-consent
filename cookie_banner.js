/* jshint undef:false */
(function() {
	"use strict";
	/*
		ISTRUZIONI:
		vedi https://bitbucket.org/geotn/thebox-docs/wiki/siti_agenzie/banner_cookie.md
	*/
	
  	try {

		var retrieveFromCookie=function(_var) {
		    var c=document.cookie,
		        cStart=c.indexOf(_var + '=');
		    if(cStart!==-1) {
		        var cLen=(_var + '=').length,
		            cEnd=c.indexOf(";", cStart+cLen);

		        if(cEnd===-1) {cEnd=c.length;}

		        return c.substring(cStart+cLen, cEnd);
		    } else {
		        return null;
		    }
		};
		var cookie_var='consenso_cookie',
			cookie_consenso_privacy = retrieveFromCookie(cookie_var),
			cookie_policy_banner = document.getElementById('cookie_policy_banner'),
			cookie_policy_wrapper = document.getElementById('cookie_policy_banner_wrapper')
		;


		//console.log(cookie_consenso_privacy);

		var setPrivacyCookie = function () {
			var CookieDate = new Date();
			CookieDate.setMonth( CookieDate.getMonth() +3 );
			document.cookie = cookie_var +'=1; expires=' + CookieDate.toGMTString( ) + '; path=/';

			cookie_policy_banner.remove();
			cookie_policy_wrapper.remove();
		};

		if(cookie_consenso_privacy === null) {

			if(cookie_policy_banner && cookie_policy_wrapper) { // extra check per evitare errori js
				cookie_policy_banner.removeAttribute("hidden");
				cookie_policy_banner.setAttribute('display', 'block');
				cookie_policy_wrapper.removeAttribute("hidden");
				cookie_policy_wrapper.setAttribute('display', 'block');
				cookie_policy_wrapper.innerHTML = cookie_policy_banner.innerHTML;
				cookie_policy_banner.remove();
				document.getElementById('cookie_policy_button_OK').onclick = setPrivacyCookie;
			}

		} else {
			setPrivacyCookie(); // rinnova la data di expire
		}

	} catch(err) { //throw "error"
	    console.log(err);
	}

})();