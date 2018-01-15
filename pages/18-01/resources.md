---
layout: base
title: Resources
permalink: /bod/18-01/resources/

subnav:
  - text: Learn
    href: "#learn"
  - text: Get Help
    href: "#get-help"
  - text: Contribute
    href: "#contribute"
---
### Learn
#### Read
* [Trustworthy Email, NIST SP 800-177](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-177.pdf) gives recommendations and guidelines for enhancing trust in email. September 2016.
* [Businesses Can Help Stop Phishing and Protect their Brands Using Email Authentication](https://www.ftc.gov/system/files/documents/reports/businesses-can-help-stop-phishing-protect-their-brands-using-email-authentication-ftc-staff/email_authentication_staff_perspective.pdf), reviews Federal Trade Commission research on email authentication. March 2017.
* [OMB M-15-13, the HTTPS-Only Standard](https://https.cio.gov) details HTTPS compliance guidance.
* [RFC 7208](https://tools.ietf.org/html/rfc7208): Sender Policy Framework (SPF) for Authorizing Use of Domains in Email. April 2014.
* [RFC 7489](https://tools.ietf.org/html/rfc7489): Domain-based Message Authentication, Reporting, and Conformance (DMARC) March 2015.
* [dmarc.org](https://dmarc.org/wiki/FAQ) maintains a thorough FAQ.

#### Watch
* DMARC: How It Works
  * [Global Cyber Alliance](https://www.youtube.com/watch?v=PFcSmuvUFt4), 1m 39s
  * [dmarcian.com](https://www.youtube.com/watch?v=XnZ4HH70UzE), 5m 26s

#### Implement

##### Tools
* ["DMARC Guide"](https://dmarcguide.globalcyberalliance.org/) from Global Cyber Alliance, is a one-off [SPF](https://dmarcguide.globalcyberalliance.org/#/spf), [DKIM](https://dmarcguide.globalcyberalliance.org/#/dkim), and [DMARC](https://dmarcguide.globalcyberalliance.org/#/dmarc) policy analyzer and record creator.
* [`trustymail`](https://github.com/dhs-ncats/trustymail) and [`pshtt`](https://github.com/dhs-ncats/pshtt) are DHS open-source Python scanners to check for SPF/DMARC/STARTTLS usage and HTTPS best practices, respectively.

##### Tutorials
* ["Add a DMARC Record"](https://support.google.com/a/answer/2466563?hl=en) is a Google help page that offers a stepped approach to enabling DMARC thoughtfully.
* ["Use DMARC to validate email in Office 365"](https://technet.microsoft.com/en-us/library/mt734386(v=exchg.150).aspx) provides Microsoft Office 365-related guidance for implementing DMARC on outbound and inbound mail delivery.
* ["How to align with SPF and DMARC for your domain if you use a lot of 3rd parties to send email as you"](https://blogs.msdn.microsoft.com/tzink/2015/03/13/how-to-align-with-spf-and-dmarc-for-your-domain-if-you-use-a-lot-of-3rd-parties-to-send-email-as-you/) is a vendor-agnostic approach to herding third-party mail-senders to get to strong DMARC enforcement.

### Get Help
* For technical questions, you may [file an issue](https://github.com/dhs-ncats/body) or email <ncats@hq.dhs.gov>.

### Contribute
* If we've made an error on any of these pages, [let us know](https://github.com/dhs-ncats/body/issues). We also invite you to [recommend improvements](https://github.com/dhs-ncats/body/pulls).
