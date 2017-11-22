---
layout: base
title: Compliance Guidance
permalink: guide/

subnav:
  - text: Checklist
    href: "#checklist"
  - text: FAQ
    href: "#frequently-asked-questions"
---
This page provides implementation guidance for [Binding Operational Directive 18-01](/) (BOD 18-01), which requires certain email and web security actions from Federal agencies.

### Checklist


* Within **30 days** of BOD issuance *(November 16th, 2017)*, submit an "Agency Plan of Action" to <FNR.BOD@hq.dhs.gov> and begin implementing the plan.
* At **60 days** *(December 15th, 2017)* after BOD issuance (**and at every 30 days until full implementation**), provide a status report of plan implementation to <FNR.BOD@hq.dhs.gov>.
* Within **90 days** *(January 15, 2018)* of BOD issuance:
  * Configure all internet-facing mail servers to offer STARTTLS.
  * Configure all second-level domains to have valid SPF/DMARC records, with at minimum a DMARC policy of "p=none" and at least one address defined as a recipient of aggregate and/or failure reports.
* By **120 days** *(February 13, 2018)* after BOD issuance:
  * Ensure all publicly accessible Federal websites and web services provide service through a secure connection (HTTPS-only, with HSTS).
  * Identify agency second-level domains that can be HSTS preloaded, and provide a list to DHS at <FNR.BOD@hq.dhs.gov>.
  * Disable SSLv2 and SSLv3 on web and mail servers.
  * Disable 3DES and RC4 ciphers on web and mail servers.
* Within **15 days of the establishment of a centralized NCCIC reporting location**, add DHS as a recipient of DMARC aggregate reports.
* Within **one year** *(October 16, 2018)* of BOD issuance, set a DMARC policy of "reject" for all second-level domains and mail-sending hosts.

### Frequently Asked Questions
Answers to other common compliance questions appear below.

* [What is the scope of BOD 18-01?](#what-is-the-scope-of-bod-18-01)
* [How does the web security requirement in BOD 18-01 differ from M-15-13?](#how-does-the-web-security-requirement-in-bod-18-01-differ-from-m-15-13)
* [How should the list of second-level domains to be preloaded be shared with DHS?](#how-should-the-list-of-second-level-domains-to-be-preloaded-be-shared-with-dhs)
* [Does the Directive require email authentication checks before mail delivery?](#does-the-directive-require-email-authentication-checks-before-mail-delivery)
* [Does the Directive require the use of DKIM?](#does-the-directive-require-the-use-of-dkim)
* [What process should be followed in order to implement email authentication?](#what-process-should-be-followed-in-order-to-implement-email-authentication)
* [How can I receive DMARC reports?](#how-can-i-receive-dmarc-reports)
* [Where should DMARC reports be sent?](#where-should-dmarc-reports-be-sent)
* [Can email authentication hinder my organization’s ability to deliver email?](#can-email-authentication-hinder-my-organizations-ability-to-deliver-email)
* [What should be done with domains that do not send mail?](#what-should-be-done-with-domains-that-do-not-send-mail)


#### What is the scope of BOD 18-01?
The Directive applies to internet-facing agency information systems, which encompasses those systems directly managed by an agency as well as those operated on an agency's behalf. Its primary focus is on agency mail and web infrastructure, regardless of domain suffix.


#### How does the web security requirement in BOD 18-01 differ from M-15-13?
BOD 18-01 incorporates parallel language to M-15-13 with regard to HTTPS deployment. The [Compliance Guide at https.cio.gov](https://https.cio.gov/guide) **should be consulted** in implementing HTTPS and HSTS.

BOD 18-01 also mandates two additional steps:
1. *The disabling of old SSL versions (SSLv2 and SSLv3) and legacy cipher suites (3DES and RC4)*. In 2014, [NIST marked SSLv2/v3 and RC4 as "not approved"](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-52r1.pdf#page=17), and in 2017, [NIST urged all users of 3DES to migrate](https://csrc.nist.gov/News/2017/Update-to-Current-Use-and-Deprecation-of-TDEA) as soon as possible.
2. *Requiring a review of second-level domains that can be submitted for HSTS preloading and to submit this list to DHS*.

[Preloading a domain](https://https.cio.gov/hsts/#hsts-preloading) enforces the use of HTTPS across an entire zone, and is technical compliance with the HTTPS usage requirements of BOD 18-01. Preloading allows agencies to avoid inventorying and configuring an HSTS policy for every individual subdomain, though this necessarily impacts all subdomains present on the domain, including intranet subdomains. Thus, all subdomains will need to support HTTPS in order to remain reachable for use in major browsers. Even with these two obstructions, preloading a domain can be a reality with coordinated effort.

Second-level .gov domains that are [only used to redirect visitors to other websites](https://https.cio.gov/guide/#what-about-domains-that-are-only-used-to-redirect-visitors-to-other-websites%3f) and are not used on intranets are excellent preloading candidates. However, DHS **strongly recommends** that federal agencies perform a thorough evaluation of those domains that are highly trafficked or otherwise have significant value. Those are likely to be the domains that citizens and intra-agency users stand to benefit most from the always-HTTPS approach that preloading provides.


#### How should the list of second-level domains to be preloaded be shared with DHS?
You are encouraged to [preload your domains yourself](https://https.cio.gov/hsts/#how-to-preload-a-domain) and then to report the set of preloaded domains to DHS in your Agency Plan of Action.

Where preloading directly is infeasible (for example, when HTTP is only served on subdomains, not on the 'www' of the base domain or at the domain root directly), you should include domains to preload in your Agency Plan of Action and DHS will coordinate the preloading with the [DotGov program](https://home.dotgov.gov/).


#### Does the Directive require email authentication checks before mail delivery?
BOD 18-01 requires email authentication be performed by *sending* domains. Evaluating inbound email against the sending domain's SPF/DKIM/DMARC records are **strongly recommended**, but not explicitly required.


#### Does the Directive require the use of DKIM?
BOD 18-01 requires federal agencies to set a DMARC policy of `p=reject`, which can be achieved without the use of DKIM. However, doing so is ultimately a policy decision for your organization to decide upon.


#### What process should be followed in order to implement email authentication?
For all second-level domains and all mail-sending hosts generally, make a plan to implement [SPF](/intro#spf--dkim), [DKIM](/intro/#spf--dkim) (mail-senders only), and [DMARC](/intro/#dmarc), **with a goal of setting** `p=reject` **on all second-level domains**.

[NIST Special Publication 800-177, section 4.6.1](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-177.pdf#page=54) recommends:

> *When implementing email authentication for a domain for the first time, a sending domain owner is advised to first publish a DMARC [resource record] with a "none" policy before deploying SPF or DKIM. This allows the sending domain owner to immediately receive reports indicating the volume of email being sent that purports to be from their domain. These reports can be used in crafting an email authentication policy that reduces the risk of errors.*

See the [Resources](/resources/#implement) page for implementation case studies.


#### How can I receive DMARC reports?
You can configure a target address for DMARC report delivery by specifying for `rua=` (aggregate) or `ruf=` (failure) [DMARC tags](https://tools.ietf.org/html/rfc7489#section-6.3). You should receive reports from [participating email providers](http://dmarc.io/sources/) within 48 hours.


#### Where should DMARC reports be sent?
Specify an email address where DMARC reports can be reviewed regularly. A DMARC record can indicate multiple addresses where reports should be sent; see [RFC 7489, section 6.2](https://tools.ietf.org/html/rfc7489#section-6.2).

A DMARC record that follows this recommendation, as set on `_dmarc.example.gov`, looks like this:

>```
"v=DMARC1; p=none; rua=mailto:reports@example.gov;"
```

This DMARC record has a policy of `none` and requests that DMARC [aggregate reports](/intro/#what-are-dmarc-reports) be sent to reports@example.gov. These reports, as well as [failure reports](/intro/#what-are-dmarc-reports), should be utilized to assist in the process of getting to `p=reject`.

Commercial services exist that help derive intelligence from DMARC reports, though their use is not required to receive or read DMARC reports.

##### *Sending DMARC reports to others*
Where cloud service providers or other contracted email service providers are utilized, sending DMARC reports to a domain different than the one requesting reports is possible with additional configuration. The intended recipient of DMARC reports must signal its willingness to accept the domain's reports with a DMARC TXT DNS record of the following syntax:

*`<original-sender-domain>._report._dmarc.<mailto-domain>`*

For example, an original message sent from example.gov is authenticated with a DMARC record:

>```
_dmarc.example.gov. IN TXT "v=DMARC1; p=reject; rua=mailto:reports.example.net"
```

The recipient then queries for a DMARC TXT RR at `example.gov._report._dmarc.example.net` and checks the `rua` tag includes the value `rua=mailto:reports.example.net` to insure that the address specified in the sending domain owner's DMARC record is the legitimate receiver for DMARC reports.

More details can be found at [SP 800-177, section 4.6.6](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-177.pdf#page=60), and [RFC 7489, section 7.1](https://tools.ietf.org/html/rfc7489#section-7.1) (with [Appendix B.2.3](https://tools.ietf.org/html/rfc7489#appendix-B.2.3)).

##### *DHS DMARC report collector*
As indicated in [BOD 18-01](/), DHS will stand up a service that can receive and process DMARC reports that will collate details into your Cyber Hygiene reports. The address will be shared in late 2017.


#### Can email authentication hinder my organization’s ability to deliver email?
Yes. You should thoughtfully deploy these technologies and plan your implementation carefully.

In particular, deploying DKIM and DMARC without adequate planning can cause negative impacts:
* [Mailing lists that use older listserv software](https://dmarc.org/wiki/FAQ#I_operate_a_mailing_list_and_I_want_to_interoperate_with_DMARC.2C_what_should_I_do.3F) are known to cause issues with DKIM-signed mail. This is because DKIM digitally signs mail; if mailing list software modifies email headers or the body of the email, the signature at the recipient will not match. Where possible, update the listserv software.
  - The challenges around "indirect email flows", where email is sent via intermediaries (mailing lists, account forwarding) is recognized as an issue, and the Internet Engineering Task Force is working on a new protocol called [ARC, Authenticated Received Chain](http://arc-spec.org/). While [still in draft](https://datatracker.ietf.org/doc/draft-ietf-dmarc-arc-protocol/), ARC is already being validated by some of the largest email providers in the world.
  - Additional details, including workarounds, are detailed in [SP 800-177, section 4.6.7](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-177.pdf#page=61), including workarounds.
- A DMARC policy of `p=reject` tells recipients to drop mail that does not match the specified SPF and DKIM policies. While this has no impact on domains that don’t send mail, it will cause cause delivery failure when there is a policy mismatch; indeed, that is its purpose.


#### What should be done with domains that do not send mail?
For second-level domains:
* A DMARC policy should be set, eventually to `p=reject`.
* An SPF "null record" should be added in DNS. A null record tells recipients that this domain sends no mail, and looks like this:

>```
"v=spf1 -all"
```

DMARC policies set at a second-level domain act as a wildcard, covering subdomains generally, *including non-mail-sending domains*. When a domain's DMARC policy is set to `p=reject`, it is not necessary to specify SPF "null records" on every active domain in the zone, though doing so is not harmful.

Since [mail clients check for a DMARC policy at the sending subdomain first](https://tools.ietf.org/html/rfc7489#section-6.6.3), it is possible to set a separate DMARC policy at (for example) `project.example.gov` even with the stronger policy at the second-level domain.
