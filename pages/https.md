---
layout: base
title: HTTPS
permalink: https/

subnav:
  - text: Background
    href: "#background"
  - text: Moving Ahead
    href: "#moving-ahead"
---
### Background
In 2015, the White House Office of Management and Budget (OMB) issued memorandum [M-15-13](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2015/m-15-13.pdf), “A Policy to Require Secure Connections across Federal Websites and Web Services”, and a companion site at [https.cio.gov](https://https.cio.gov). This policy requires **all publicly-accessible Federal websites and web services** to enforce the use of Hypertext Transfer Protocol Secure (HTTPS), and to use HTTP Strict Transport Security (HSTS).

The [memo](https://https.cio.gov/#background) details why HTTPS and HSTS are so important:
> *The unencrypted HTTP protocol does not protect data from interception or alteration, which can subject users to eavesdropping, tracking, and the modification of received data... Unencrypted HTTP connections create a privacy vulnerability and expose potentially sensitive information about users of unencrypted Federal websites and services. Data sent over HTTP is susceptible to interception, manipulation, and impersonation. This data can include browser identity, website content, search terms, and other user-submitted information.*
>
> *HSTS ...instruct[s] compliant browsers to assume HTTPS going forward. This reduces insecure redirects, and protects users against attacks that attempt to downgrade connections to plain HTTP.*

Over the last two years, this policy’s implementation has enabled the federal government to [outpace the private sector](https://18f.gsa.gov/2017/01/04/tracking-the-us-governments-progress-on-moving-https/#did-we-need-a-formal-https-policy) in the deployment of HTTPS.

### Moving Ahead
M-15-13 also contemplates that "[p]rotocols and web standards improve regularly" and that "Federal websites and services should deploy HTTPS in a manner that allows for rapid updates to certificates, cipher choices (including forward secrecy), protocol versions, and other configuration elements."

**BOD 18-01 directs agencies to make more progress on HTTPS and HSTS deployment**, including by removing support for known-weak cryptographic protocols and ciphers. These are:

#### Protocols
* **SSLv2:** [Released in 1995.](https://tools.ietf.org/html/draft-hickman-netscape-ssl-00) Most modern clients do not support SSLv2, but the [DROWN](https://drownattack.com) attack demonstrated that *merely serving* SSLv2 enables the inspection of traffic encrypted with more modern TLS versions.
* **SSLv3:** [Released in 1996.](https://tools.ietf.org/html/rfc6101) Considered to be insecure after the [POODLE](https://www.openssl.org/~bodo/ssl-poodle.pdf) attack was published in 2014. Turning off SSLv3 effectively removes support for Internet Explorer 6.

#### Ciphers
* **RC4:** In 2014, [NIST marked RC4 as "not approved"](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-52r1.pdf#page=27) for use in Federal information systems.
* **3DES:** In 2017, [NIST urged all users of 3DES to migrate](https://csrc.nist.gov/News/2017/Update-to-Current-Use-and-Deprecation-of-TDEA) as soon as possible.

BOD 18-01 requires that these protocols and ciphers cease being offered on internet-facing web and email servers.

#### Preloading
The directive also requires that agencies identify and provide a list to DHS of agency second-level domains that can be HSTS preloaded. Agencies should review their list of second-level domains (including any not yet using the .gov top-level domain, as required by [M-17-06](https://policy.cio.gov/web-policy/domain/)) and analyze which can be preloaded.
- - -
#### See the [Compliance Guide](/guide) for more info.
* [How does the web security requirement in BOD 18-01 differ from M-15-13?](/guide/#how-does-the-web-security-requirement-in-bod-18-01-differ-from-m-15-13)
* [How should the list of second-level domains to be preloaded be shared with DHS?](/guide/#how-should-the-list-of-second-level-domains-to-be-preloaded-be-shared-with-dhs)
* [https.cio.gov contains the M-15-13 compliance guide](https://https.cio.gov/guide/), which should be followed in implementing the HTTPS/HSTS requirements of BOD-18-01. See also:
  * [Introduction to HTTPS](https://https.cio.gov/faq/)
  * [HTTP Strict Transport Security](https://https.cio.gov/hsts/)
