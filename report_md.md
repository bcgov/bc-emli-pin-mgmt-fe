# ZAP Scanning Report


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 5 |
| Low | 7 |
| Informational | 12 |




## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- |
| CSP: Wildcard Directive | Medium | 2 |
| CSP: script-src unsafe-inline | Medium | 2 |
| CSP: style-src unsafe-inline | Medium | 2 |
| Content Security Policy (CSP) Header Not Set | Medium | 1 |
| Missing Anti-clickjacking Header | Medium | 1 |
| CSP: Notices | Low | 2 |
| Cookie with SameSite Attribute None | Low | 2 |
| Full Path Disclosure | Low | 2 |
| Permissions Policy Header Not Set | Low | 11 |
| Strict-Transport-Security Header Not Set | Low | 11 |
| Timestamp Disclosure - Unix | Low | 1 |
| X-Content-Type-Options Header Missing | Low | 11 |
| Base64 Disclosure | Informational | 6 |
| Content-Type Header Missing | Informational | 1 |
| Information Disclosure - Suspicious Comments | Informational | 9 |
| Modern Web Application | Informational | 3 |
| Non-Storable Content | Informational | 4 |
| Sec-Fetch-Dest Header is Missing | Informational | 3 |
| Sec-Fetch-Mode Header is Missing | Informational | 3 |
| Sec-Fetch-Site Header is Missing | Informational | 3 |
| Sec-Fetch-User Header is Missing | Informational | 3 |
| Session Management Response Identified | Informational | 3 |
| Storable and Cacheable Content | Informational | 8 |
| Storable but Non-Cacheable Content | Informational | 1 |




## Alert Detail



### [ CSP: Wildcard Directive ](https://www.zaproxy.org/docs/alerts/10055/)



##### Medium (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks. Including (but not limited to) Cross Site Scripting (XSS), and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `defaultSrc https://bc-emli-pin-mgmt-be-c82b4c-dev.apps.silver.devops.gov.bc.ca`
  * Other Info: `The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: 
script-src, style-src, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, form-action

The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `defaultSrc https://bc-emli-pin-mgmt-be-c82b4c-dev.apps.silver.devops.gov.bc.ca`
  * Other Info: `The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: 
script-src, style-src, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, form-action

The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.`

Instances: 2

### Solution

Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.

### Reference


* [ https://www.w3.org/TR/CSP/ ](https://www.w3.org/TR/CSP/)
* [ https://caniuse.com/#search=content+security+policy ](https://caniuse.com/#search=content+security+policy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)
* [ https://github.com/shapesecurity/salvation ](https://github.com/shapesecurity/salvation)
* [ https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources ](https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ CSP: script-src unsafe-inline ](https://www.zaproxy.org/docs/alerts/10055/)



##### Medium (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks. Including (but not limited to) Cross Site Scripting (XSS), and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `defaultSrc https://bc-emli-pin-mgmt-be-c82b4c-dev.apps.silver.devops.gov.bc.ca`
  * Other Info: `script-src includes unsafe-inline.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `defaultSrc https://bc-emli-pin-mgmt-be-c82b4c-dev.apps.silver.devops.gov.bc.ca`
  * Other Info: `script-src includes unsafe-inline.`

Instances: 2

### Solution

Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.

### Reference


* [ https://www.w3.org/TR/CSP/ ](https://www.w3.org/TR/CSP/)
* [ https://caniuse.com/#search=content+security+policy ](https://caniuse.com/#search=content+security+policy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)
* [ https://github.com/shapesecurity/salvation ](https://github.com/shapesecurity/salvation)
* [ https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources ](https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ CSP: style-src unsafe-inline ](https://www.zaproxy.org/docs/alerts/10055/)



##### Medium (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks. Including (but not limited to) Cross Site Scripting (XSS), and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `defaultSrc https://bc-emli-pin-mgmt-be-c82b4c-dev.apps.silver.devops.gov.bc.ca`
  * Other Info: `style-src includes unsafe-inline.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `defaultSrc https://bc-emli-pin-mgmt-be-c82b4c-dev.apps.silver.devops.gov.bc.ca`
  * Other Info: `style-src includes unsafe-inline.`

Instances: 2

### Solution

Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.

### Reference


* [ https://www.w3.org/TR/CSP/ ](https://www.w3.org/TR/CSP/)
* [ https://caniuse.com/#search=content+security+policy ](https://caniuse.com/#search=content+security+policy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)
* [ https://github.com/shapesecurity/salvation ](https://github.com/shapesecurity/salvation)
* [ https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources ](https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Content Security Policy (CSP) Header Not Set ](https://www.zaproxy.org/docs/alerts/10038/)



##### Medium (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 1

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy ](https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy)
* [ https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
* [ https://www.w3.org/TR/CSP/ ](https://www.w3.org/TR/CSP/)
* [ https://w3c.github.io/webappsec-csp/ ](https://w3c.github.io/webappsec-csp/)
* [ https://web.dev/articles/csp ](https://web.dev/articles/csp)
* [ https://caniuse.com/#feat=contentsecuritypolicy ](https://caniuse.com/#feat=contentsecuritypolicy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Missing Anti-clickjacking Header ](https://www.zaproxy.org/docs/alerts/10020/)



##### Medium (Medium)

### Description

The response does not include either Content-Security-Policy with 'frame-ancestors' directive or X-Frame-Options to protect against 'ClickJacking' attacks.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 1

### Solution

Modern Web browsers support the Content-Security-Policy and X-Frame-Options HTTP headers. Ensure one of them is set on all web pages returned by your site/app.
If you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)


#### CWE Id: [ 1021 ](https://cwe.mitre.org/data/definitions/1021.html)


#### WASC Id: 15

#### Source ID: 3

### [ CSP: Notices ](https://www.zaproxy.org/docs/alerts/10055/)



##### Low (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks. Including (but not limited to) Cross Site Scripting (XSS), and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `defaultSrc https://bc-emli-pin-mgmt-be-c82b4c-dev.apps.silver.devops.gov.bc.ca`
  * Other Info: `Warnings:
Unrecognized directive defaultsrc
`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `defaultSrc https://bc-emli-pin-mgmt-be-c82b4c-dev.apps.silver.devops.gov.bc.ca`
  * Other Info: `Warnings:
Unrecognized directive defaultsrc
`

Instances: 2

### Solution

Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.

### Reference


* [ https://www.w3.org/TR/CSP/ ](https://www.w3.org/TR/CSP/)
* [ https://caniuse.com/#search=content+security+policy ](https://caniuse.com/#search=content+security+policy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)
* [ https://github.com/shapesecurity/salvation ](https://github.com/shapesecurity/salvation)
* [ https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources ](https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Cookie with SameSite Attribute None ](https://www.zaproxy.org/docs/alerts/10054/)



##### Low (Medium)

### Description

A cookie has been set with its SameSite attribute set to "none", which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: `066d51379f0e80753a0fff3b87556849`
  * Attack: ``
  * Evidence: `set-cookie: 066d51379f0e80753a0fff3b87556849`
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `066d51379f0e80753a0fff3b87556849`
  * Attack: ``
  * Evidence: `set-cookie: 066d51379f0e80753a0fff3b87556849`
  * Other Info: ``

Instances: 2

### Solution

Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.

### Reference


* [ https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site ](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site)


#### CWE Id: [ 1275 ](https://cwe.mitre.org/data/definitions/1275.html)


#### WASC Id: 13

#### Source ID: 3

### [ Full Path Disclosure ](https://www.zaproxy.org/docs/alerts/110009/)



##### Low (Low)

### Description

The full path of files which might be sensitive has been exposed to the client.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `/home/`
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `/home/`
  * Other Info: ``

Instances: 2

### Solution

Disable directory browsing in your web server. Refer to the web server documentation.

### Reference


* [ https://owasp.org/www-community/attacks/Full_Path_Disclosure ](https://owasp.org/www-community/attacks/Full_Path_Disclosure)


#### CWE Id: [ 209 ](https://cwe.mitre.org/data/definitions/209.html)


#### WASC Id: 13

#### Source ID: 3

### [ Permissions Policy Header Not Set ](https://www.zaproxy.org/docs/alerts/10063/)



##### Low (Medium)

### Description

Permissions Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Permissions Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/b9eDVCgAOfzAaZg9mJS-X/_buildManifest.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/b9eDVCgAOfzAaZg9mJS-X/_ssgManifest.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/665-363245faa1fbd036.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/675-6c3a04284194b12e.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/main-1f67a3cf9931af88.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/pages/404-5ad6ec73b911bd3a.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/pages/_app-83735b03f48df9ad.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/pages/index-9090db80f19bacfe.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/webpack-69ea0539f28e5c17.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 11

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to set the Permissions-Policy header.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy)
* [ https://developer.chrome.com/blog/feature-policy/ ](https://developer.chrome.com/blog/feature-policy/)
* [ https://scotthelme.co.uk/a-new-security-header-feature-policy/ ](https://scotthelme.co.uk/a-new-security-header-feature-policy/)
* [ https://w3c.github.io/webappsec-feature-policy/ ](https://w3c.github.io/webappsec-feature-policy/)
* [ https://www.smashingmagazine.com/2018/12/feature-policy/ ](https://www.smashingmagazine.com/2018/12/feature-policy/)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Strict-Transport-Security Header Not Set ](https://www.zaproxy.org/docs/alerts/10035/)



##### Low (High)

### Description

HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/b9eDVCgAOfzAaZg9mJS-X/_buildManifest.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/b9eDVCgAOfzAaZg9mJS-X/_ssgManifest.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/675-6c3a04284194b12e.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/pages/404-5ad6ec73b911bd3a.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/pages/_app-83735b03f48df9ad.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/pages/index-9090db80f19bacfe.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/webpack-69ea0539f28e5c17.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/css/5ea3f00a67852f2d.css
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/css/7064ed36183cc9bf.css
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 11

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to enforce Strict-Transport-Security.

### Reference


* [ https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
* [ https://owasp.org/www-community/Security_Headers ](https://owasp.org/www-community/Security_Headers)
* [ https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security ](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
* [ https://caniuse.com/stricttransportsecurity ](https://caniuse.com/stricttransportsecurity)
* [ https://datatracker.ietf.org/doc/html/rfc6797 ](https://datatracker.ietf.org/doc/html/rfc6797)


#### CWE Id: [ 319 ](https://cwe.mitre.org/data/definitions/319.html)


#### WASC Id: 15

#### Source ID: 3

### [ Timestamp Disclosure - Unix ](https://www.zaproxy.org/docs/alerts/10096/)



##### Low (Low)

### Description

A timestamp was disclosed by the application/web server - Unix

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/main-1f67a3cf9931af88.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1540483477`
  * Other Info: `1540483477, which evaluates to: 2018-10-25 16:04:37`

Instances: 1

### Solution

Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.

### Reference


* [ http://projects.webappsec.org/w/page/13246936/Information%20Leakage ](http://projects.webappsec.org/w/page/13246936/Information%20Leakage)


#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ X-Content-Type-Options Header Missing ](https://www.zaproxy.org/docs/alerts/10021/)



##### Low (Medium)

### Description

The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/b9eDVCgAOfzAaZg9mJS-X/_buildManifest.js
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/b9eDVCgAOfzAaZg9mJS-X/_ssgManifest.js
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/675-6c3a04284194b12e.js
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/pages/404-5ad6ec73b911bd3a.js
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/pages/_app-83735b03f48df9ad.js
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/pages/index-9090db80f19bacfe.js
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/webpack-69ea0539f28e5c17.js
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/css/5ea3f00a67852f2d.css
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/css/7064ed36183cc9bf.css
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`

Instances: 11

### Solution

Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.
If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.

### Reference


* [ https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622941(v=vs.85) ](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622941(v=vs.85))
* [ https://owasp.org/www-community/Security_Headers ](https://owasp.org/www-community/Security_Headers)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Base64 Disclosure ](https://www.zaproxy.org/docs/alerts/10094/)



##### Informational (Medium)

### Description

Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `/_next/static/b9eDVCgAOfzAaZg9mJS-X/_buildManifest`
  * Other Info: `�����쵫bs��x5B�����ىK��������'޲`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/665-363245faa1fbd036.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `Footer_footerSectionWrap__uPNr9`
  * Other Info: `�-z�ߢ�^�'��*'Z�����6�`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/pages/404-5ad6ec73b911bd3a.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `Button_BCGovPrimaryButton__XGa3K`
  * Other Info: `�m��j/>��j����h�����`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/css/7064ed36183cc9bf.css
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `Header_headerSectionWrap__7fkdh`
  * Other Info: `�z��y�^�'��*'Z����ߑ�`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `/_next/static/b9eDVCgAOfzAaZg9mJS-X/_buildManifest`
  * Other Info: `�����쵫bs��x5B�����ىK��������'޲`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `/_next/static/b9eDVCgAOfzAaZg9mJS-X/_buildManifest`
  * Other Info: `�����쵫bs��x5B�����ىK��������'޲`

Instances: 6

### Solution

Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.

### Reference


* [ https://projects.webappsec.org/w/page/13246936/Information%20Leakage ](https://projects.webappsec.org/w/page/13246936/Information%20Leakage)


#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Content-Type Header Missing ](https://www.zaproxy.org/docs/alerts/10019/)



##### Informational (Medium)

### Description

The Content-Type header was either missing or empty.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/home
  * Method: `GET`
  * Parameter: `content-type`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 1

### Solution

Ensure each page is setting the specific and appropriate content-type value for the content being delivered.

### Reference


* [ https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622941(v=vs.85) ](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622941(v=vs.85))


#### CWE Id: [ 345 ](https://cwe.mitre.org/data/definitions/345.html)


#### WASC Id: 12

#### Source ID: 3

### [ Information Disclosure - Suspicious Comments ](https://www.zaproxy.org/docs/alerts/10027/)



##### Informational (Low)

### Description

The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `query`
  * Other Info: `The following pattern was used: \bQUERY\b and was detected in the element starting with: "<script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{"isAuthenticated":false,"isRegistered":false},"__N_SSP", see evidence field for the suspicious comment/snippet.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/b9eDVCgAOfzAaZg9mJS-X/_buildManifest.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `user`
  * Other Info: `The following pattern was used: \bUSER\b and was detected in the element starting with: "self.__BUILD_MANIFEST=function(s,c,e,a,t,r,f,i,u){return{__rewrites:{afterFiles:[],beforeFiles:[],fallback:[]},"/":["static/chun", see evidence field for the suspicious comment/snippet.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/665-363245faa1fbd036.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `Admin`
  * Other Info: `The following pattern was used: \bADMIN\b and was detected in the element starting with: "(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{3519:function(e){"use strict";e.exports={dev:"https://bc-emli-pin", see evidence field for the suspicious comment/snippet.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/framework-0c7baedefba6b077.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `db`
  * Other Info: `The following pattern was used: \bDB\b and was detected in the element starting with: " */var u,i,o,s,w,x,C=a(7294),_=a(3840);function p(n){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<", see evidence field for the suspicious comment/snippet.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/main-1f67a3cf9931af88.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `query`
  * Other Info: `The following pattern was used: \bQUERY\b and was detected in the element starting with: "(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[179],{37:function(){"trimStart"in String.prototype||(String.prototype.t", see evidence field for the suspicious comment/snippet.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/pages/index-9090db80f19bacfe.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `user`
  * Other Info: `The following pattern was used: \bUSER\b and was detected in the element starting with: "(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1752:function(e,t,c){e.exports=c(6286)},5557:function(e,t,c){(win", see evidence field for the suspicious comment/snippet.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `query`
  * Other Info: `The following pattern was used: \bQUERY\b and was detected in the element starting with: "!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:", see evidence field for the suspicious comment/snippet.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `query`
  * Other Info: `The following pattern was used: \bQUERY\b and was detected in the element starting with: "<script id="__NEXT_DATA__" type="application/json" crossorigin="">{"props":{"pageProps":{}},"page":"/404","query":{},"buildId":"", see evidence field for the suspicious comment/snippet.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `query`
  * Other Info: `The following pattern was used: \bQUERY\b and was detected in the element starting with: "<script id="__NEXT_DATA__" type="application/json" crossorigin="">{"props":{"pageProps":{}},"page":"/404","query":{},"buildId":"", see evidence field for the suspicious comment/snippet.`

Instances: 9

### Solution

Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.

### Reference



#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Modern Web Application ](https://www.zaproxy.org/docs/alerts/10109/)



##### Informational (Medium)

### Description

The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<script defer="" nomodule="" src="/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script>`
  * Other Info: `No links have been found while there are scripts, which is an indication that this is a modern web application.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<noscript data-n-css=""></noscript>`
  * Other Info: `A noScript tag has been found, which is an indication that the application works differently with JavaScript enabled compared to when it is not.`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<noscript data-n-css=""></noscript>`
  * Other Info: `A noScript tag has been found, which is an indication that the application works differently with JavaScript enabled compared to when it is not.`

Instances: 3

### Solution

This is an informational alert and so no changes are required.

### Reference




#### Source ID: 3

### [ Non-Storable Content ](https://www.zaproxy.org/docs/alerts/10049/)



##### Informational (Medium)

### Description

The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/home
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
  * Other Info: ``

Instances: 4

### Solution

The content may be marked as storable by ensuring that the following conditions are satisfied:
The request method must be understood by the cache and defined as being cacheable ("GET", "HEAD", and "POST" are currently defined as cacheable)
The response status code must be understood by the cache (one of the 1XX, 2XX, 3XX, 4XX, or 5XX response classes are generally understood)
The "no-store" cache directive must not appear in the request or response header fields
For caching by "shared" caches such as "proxy" caches, the "private" response directive must not appear in the response
For caching by "shared" caches such as "proxy" caches, the "Authorization" header field must not appear in the request, unless the response explicitly allows it (using one of the "must-revalidate", "public", or "s-maxage" Cache-Control response directives)
In addition to the conditions above, at least one of the following conditions must also be satisfied by the response:
It must contain an "Expires" header field
It must contain a "max-age" response directive
For "shared" caches such as "proxy" caches, it must contain a "s-maxage" response directive
It must contain a "Cache Control Extension" that allows it to be cached
It must have a status code that is defined as cacheable by default (200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501).   

### Reference


* [ https://datatracker.ietf.org/doc/html/rfc7234 ](https://datatracker.ietf.org/doc/html/rfc7234)
* [ https://datatracker.ietf.org/doc/html/rfc7231 ](https://datatracker.ietf.org/doc/html/rfc7231)
* [ https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html ](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)


#### CWE Id: [ 524 ](https://cwe.mitre.org/data/definitions/524.html)


#### WASC Id: 13

#### Source ID: 3

### [ Sec-Fetch-Dest Header is Missing ](https://www.zaproxy.org/docs/alerts/90005/)



##### Informational (High)

### Description

Specifies how and where the data would be used. For instance, if the value is audio, then the requested resource must be audio data and not any other type of resource.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: `Sec-Fetch-Dest`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `Sec-Fetch-Dest`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: `Sec-Fetch-Dest`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 3

### Solution

Ensure that Sec-Fetch-Dest header is included in request headers.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest)


#### CWE Id: [ 352 ](https://cwe.mitre.org/data/definitions/352.html)


#### WASC Id: 9

#### Source ID: 3

### [ Sec-Fetch-Mode Header is Missing ](https://www.zaproxy.org/docs/alerts/90005/)



##### Informational (High)

### Description

Allows to differentiate between requests for navigating between HTML pages and requests for loading resources like images, audio etc.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: `Sec-Fetch-Mode`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `Sec-Fetch-Mode`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: `Sec-Fetch-Mode`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 3

### Solution

Ensure that Sec-Fetch-Mode header is included in request headers.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode)


#### CWE Id: [ 352 ](https://cwe.mitre.org/data/definitions/352.html)


#### WASC Id: 9

#### Source ID: 3

### [ Sec-Fetch-Site Header is Missing ](https://www.zaproxy.org/docs/alerts/90005/)



##### Informational (High)

### Description

Specifies the relationship between request initiator's origin and target's origin.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: `Sec-Fetch-Site`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `Sec-Fetch-Site`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: `Sec-Fetch-Site`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 3

### Solution

Ensure that Sec-Fetch-Site header is included in request headers.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site)


#### CWE Id: [ 352 ](https://cwe.mitre.org/data/definitions/352.html)


#### WASC Id: 9

#### Source ID: 3

### [ Sec-Fetch-User Header is Missing ](https://www.zaproxy.org/docs/alerts/90005/)



##### Informational (High)

### Description

Specifies if a navigation request was initiated by a user.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: `Sec-Fetch-User`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `Sec-Fetch-User`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: `Sec-Fetch-User`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 3

### Solution

Ensure that Sec-Fetch-User header is included in user initiated requests.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User)


#### CWE Id: [ 352 ](https://cwe.mitre.org/data/definitions/352.html)


#### WASC Id: 9

#### Source ID: 3

### [ Session Management Response Identified ](https://www.zaproxy.org/docs/alerts/10112/)



##### Informational (Medium)

### Description

The given response has been identified as containing a session management token. The 'Other Info' field contains a set of header tokens that can be used in the Header Based Session Management Method. If the request is in a context which has a Session Management Method set to "Auto-Detect" then this rule will change the session management to use the tokens identified.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: `066d51379f0e80753a0fff3b87556849`
  * Attack: ``
  * Evidence: `10afb0bdf7a18bc8a7084d038067fdca`
  * Other Info: `
cookie:066d51379f0e80753a0fff3b87556849`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `066d51379f0e80753a0fff3b87556849`
  * Attack: ``
  * Evidence: `10afb0bdf7a18bc8a7084d038067fdca`
  * Other Info: `
cookie:066d51379f0e80753a0fff3b87556849`
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `066d51379f0e80753a0fff3b87556849`
  * Attack: ``
  * Evidence: `10afb0bdf7a18bc8a7084d038067fdca`
  * Other Info: `
cookie:066d51379f0e80753a0fff3b87556849`

Instances: 3

### Solution

This is an informational alert rather than a vulnerability and so there is nothing to fix.

### Reference


* [ https://www.zaproxy.org/docs/desktop/addons/authentication-helper/session-mgmt-id ](https://www.zaproxy.org/docs/desktop/addons/authentication-helper/session-mgmt-id)



#### Source ID: 3

### [ Storable and Cacheable Content ](https://www.zaproxy.org/docs/alerts/10049/)



##### Informational (Medium)

### Description

The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/b9eDVCgAOfzAaZg9mJS-X/_buildManifest.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=31536000`
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/b9eDVCgAOfzAaZg9mJS-X/_ssgManifest.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=31536000`
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/675-6c3a04284194b12e.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=31536000`
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/pages/_app-83735b03f48df9ad.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=31536000`
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=31536000`
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/chunks/webpack-69ea0539f28e5c17.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=31536000`
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/css/5ea3f00a67852f2d.css
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=31536000`
  * Other Info: ``
* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/_next/static/css/7064ed36183cc9bf.css
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=31536000`
  * Other Info: ``

Instances: 8

### Solution

Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:
Cache-Control: no-cache, no-store, must-revalidate, private
Pragma: no-cache
Expires: 0
This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. 

### Reference


* [ https://datatracker.ietf.org/doc/html/rfc7234 ](https://datatracker.ietf.org/doc/html/rfc7234)
* [ https://datatracker.ietf.org/doc/html/rfc7231 ](https://datatracker.ietf.org/doc/html/rfc7231)
* [ https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html ](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)


#### CWE Id: [ 524 ](https://cwe.mitre.org/data/definitions/524.html)


#### WASC Id: 13

#### Source ID: 3

### [ Storable but Non-Cacheable Content ](https://www.zaproxy.org/docs/alerts/10049/)



##### Informational (Medium)

### Description

The response contents are storable by caching components such as proxy servers, but will not be retrieved directly from the cache, without validating the request upstream, in response to similar requests from other users. 

* URL: https://bc-emli-pin-mgmt-fe-c82b4c-dev.apps.silver.devops.gov.bc.ca/favicon.ico
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=0`
  * Other Info: ``

Instances: 1

### Solution



### Reference


* [ https://datatracker.ietf.org/doc/html/rfc7234 ](https://datatracker.ietf.org/doc/html/rfc7234)
* [ https://datatracker.ietf.org/doc/html/rfc7231 ](https://datatracker.ietf.org/doc/html/rfc7231)
* [ https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html ](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)


#### CWE Id: [ 524 ](https://cwe.mitre.org/data/definitions/524.html)


#### WASC Id: 13

#### Source ID: 3


