/*@preserve
 *
 * Cookie Consent Manager
 * Massimo Cassandro 2015-2020
 * https://github.com/massimo-cassandro/m-cookie-consent
 *
 */
export function m_cookie_consent (params) {
  'use strict';

  const debug = false,
    default_params = {
      message: `Questo sito utilizza cookie, anche di terze parti anonimizzati,
        per garantirti la migliore esperienza di navigazione.
        Continuando a navigare su questo sito, si acconsente al loro utilizzo.<br>
        Consulta la pagina della
        <a href="/privacy-policy" rel="noopener noreferrer nofollow">
        Privacy Policy</a> per maggiori informazioni.`,
      btn_text: 'Ho capito',
      banner_aria_label: 'Consenso Cookie',
      btn_aria_label: 'Dai il consenso per l\'utilizzo dei cookie',
      btn_class: ''
    },

    consent_cookie='m_cookie_consent=accepted',
    getConsentCookie = () => {
      if(document.cookie.indexOf(consent_cookie) !== -1) {
        return true;
      } else {
        return false;
      }
    },
    setConsentCookie = () => {
      let cookie_date = new Date();
      cookie_date.setHours(cookie_date.getHours() + (24 * 365));
      let cookie_parts = [
        `${consent_cookie}`,
        'expires=' + cookie_date.toUTCString(),
        'path=/',
        'SameSite=Lax'
      ];
      document.cookie = cookie_parts.join(';');
    };

  if(!getConsentCookie() || debug) {
    params = Object.assign(default_params, params);

    if(params.btn_class) {
      params.btn_class = ` class="${params.btn_class}"`;
    }

    document.body.insertAdjacentHTML('beforeend', `
      <!--googleoff: all-->
      <div class="m-cookie-consent" role="dialog" aria-live="polite" aria-label="${params.banner_aria_label}" aria-describedby="mcc-descr">
        <div id="mcc-descr">${params.message}</div>
        <div class="mcc__btn">
          <button type="button" aria-label="${params.btn_aria_label}"${params.btn_class}>
            ${params.btn_text}
          </button>
        </div>
      </div>
      <!--googleon: all-->
    `);

    let cookie_banner = document.querySelector('.m-cookie-consent');

    cookie_banner.querySelector('.mcc__btn button')
    cookie_banner.addEventListener('click', () => {
      cookie_banner.addEventListener('transitionend', () => {
        cookie_banner.remove();
      });
      cookie_banner.classList.add('mcc-fade-out');
      setConsentCookie();
    }, false);
  }
}

