/*@license
 * Script per gestione consenso Cookie
 * Massimo Cassandro 2015
 * https://github.com/massimo-cassandro/consenso-cookie
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 */
!function(){"use strict";try{var e=function(e){var n=document.cookie,t=n.indexOf(e+"=");if(-1!==t){var o=(e+"=").length,i=n.indexOf(";",t+o);return-1===i&&(i=n.length),n.substring(t+o,i)}return null},n="consenso_cookie",t=e(n),o=document.getElementById("cookie_policy_banner"),i=document.getElementById("cookie_policy_banner_wrapper"),c=function(){var e=new Date;e.setMonth(e.getMonth()+3),document.cookie=n+"=1; expires="+e.toGMTString()+"; path=/",o.remove(),i.remove()};null===t?o&&i&&(i.innerHTML=o.innerHTML,i.removeAttribute("hidden"),i.setAttribute("display","block"),o.remove(),document.getElementById("cookie_policy_button_OK").onclick=c):c()}catch(r){console.log(r)}}();