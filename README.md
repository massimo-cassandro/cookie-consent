# Cookie consent banner

**v.2 (consenso-cookie in v.1)**

<https://github.com/massimo-cassandro/m-cookie-consent>

Small and customizable script to display a cookie consent banner

## Using Cookie consent banner
Import `m-cookie-consent.js` as es6 module to your project and add
`m-cookie-consent.scss` to your styles (you can also use the compiled css verione in the demo folder).

```javascript
import {m_cookie_consent} from './path/to/m-cookie-consent'
```

To activate the banner, invoke the function adding some parameter:

```javascript
m_cookie_consent({
  message: '...',
  btn_text: '...',
  banner_aria_label: '...',
  btn_aria_label: '...'
});
```

Where:

* `message` is the text to be displayed in the banner (html allowed). It may contain the link to your privacy policy page
* `btn_text` is the text of the dismiss button (html allowed)
* `banner_aria_label` and `btn_aria_label` are text for ARIA label attributes

The banner is positioned at page bottom right. To change this behavior you have to change the scss/css file.

If the banner is displayed, a `div.m-cookie-consent` element is appended to your page.
