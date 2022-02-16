# Cookie consent banner

**v.3 (was “consenso-cookie” in v.1)**

<https://github.com/massimo-cassandro/cookie-consent>

Small and customizable script to display a cookie consent banner

## Installation

```
npm i --save @massimo-cassandro/cookie-consent
```

## Using Cookie consent banner
Import `cookie-consent.js` as es6 module to your project and add
`cookie-consent.scss` to your styles (you can also use the compiled css version in the demo folder).

```javascript
import {cookie_consent} from '@massimo-cassandro/cookie-consent';
```

Many elements of scss can be customized:

```scss
$mcc-font-family: false; // set to false to inherit document font-family
$mcc-banner-bg-color: #444;
$mcc-banner-text-color: color-yiq($mcc-banner-bg-color);

$mcc-link-color: #fc0;
$mcc-link-hover-color: darken($mcc-link-color, 10);
$mcc-link-text-decoration: none;
$mcc-link-hover-text-decoration: underline;

$mcc-button-bg-color: #fc0;
$mcc-button-text-color: #000;
$mcc-button-hover-bg-color: darken($mcc-button-bg-color, 10);
$mcc-button-hover-text-color: #000;

$mcc-border-radius: 0;

$mcc-box-shadow: 0 0 4px rgba(#000, .6); // set to false or none to disable

@import '@massimo-cassandro/cookie-consent';
```

To activate the banner, invoke the function adding some parameter:

```javascript
cookie_consent({
  message: '...',
  btn_text: '...',
  banner_aria_label: '...',
  btn_aria_label: '...',
  btn_class: '...' 
});
```

Where:

* `message` is the text to be displayed in the banner (html allowed). It may contain the link to your privacy policy page
* `btn_text` is the text of the dismiss button (html allowed)
* `banner_aria_label` and `btn_aria_label` are text for ARIA label attributes
* `btn_class` is an optional class(es) to be added to the dismiss button

The banner is positioned at page bottom right. To change this behavior you have to change the scss/css file.

If the banner is displayed, a `div.cookie-consent` element is appended to your page.
