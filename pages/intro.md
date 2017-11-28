---
layout: base
title: Introduction to Email Authentication
permalink: intro/

subnav:
  - text: Description
    href: "#what-is-email-authentication"
  - text: Standards
    href: "#what-are-the-standards-that-enable-email-authentication"
  - text: Reports
    href: "#what-are-dmarc-reports"
---
The Department of Homeland Security seeks to incentivize the **thoughtful deployment of email authentication technologies** and generally increase the security of messages to and from government agencies. Email that fraudulently uses a Federal domain should be easy to detect.

This section is a recital and elaboration of key points in two recent Federal documents:
1. [Special Publication 800-177, Trustworthy Email](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-177.pdf), which the National Institute of Standards and Technology issued in September 2016
2. [Businesses Can Help Stop Phishing and Protect their Brands Using Email Authentication](https://www.ftc.gov/system/files/documents/reports/businesses-can-help-stop-phishing-protect-their-brands-using-email-authentication-ftc-staff/email_authentication_staff_perspective.pdf), issued in March 2017 by the Federal Trade Commission’s Bureau of Consumer Protection based on a study performed by the Office of Technology Research and Investigation

### What is email authentication?
"Email authentication" refers to a set of technologies that enable:
* a domain owner to assert control over its domains, making them harder to successfully spoof in email.
* the recipient of an email to have reasonable confidence that a message which purports to be from a given domain is genuine or not.

Email authentication can impede the delivery of phishing emails that attempt to play on an organization's domains, which protects the sender's reputation and keeps likely-harmful emails out of recipient mailboxes. This protects citizens who might receive authoritative-sounding emails claiming to be from a .gov address, and equally protects internal government users who may rely on information that appears to come, e.g., from an important colleague.

There are three predominant forms of email authentication technology: [SPF](#spf--dkim), [DKIM](#spf--dkim), and [DMARC](#dmarc). Conceptually, each operate similarly:
1. When an email arrives at a recipient mail server, it queries the sending domain's DNS to check for relevant email authentication records.
2. If email authentication records are found, the server evaluates the email it received against the email authentication records and make a delivery determination: delivered, marked as questionable, or discarded altogether.

See [SP 800-177, section 4](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-177.pdf#page=37) for a detailed technical description.


### What are the standards that enable email authentication?

#### SPF & DKIM
* **SPF**, or Sender Policy Framework, enables a mail sender to detail the canonical source(s) (IP addresses, or domains to find those IP addresses) authorized to send email on a domain's behalf.

   Once set, a receiver authenticates a piece of mail by comparing the IP address of the sending email server against the addresses listed on the SPF record. The SPF record is found by querying at the domain used in the email address asserted at the initial SMTP transaction, called the [RFC5321.From](https://tools.ietf.org/html/rfc5321#section-4.1.1.2) address, or [envelope From:](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-177.pdf#page=22) address ([among other names](https://en.wikipedia.org/wiki/Bounce_address)). If the IP address of the sender is listed in the SPF record, the message is considered authentic.

   *Detailed information can be found in [SP 800-177, section 4.4](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-177.pdf#page=39) and [RFC 7208](https://tools.ietf.org/html/rfc7208).*

* **DKIM**, or DomainKeys Identified Mail, involves the cryptographic signing of individual email messages. A receiver authenticates a piece of DKIM-signed mail by using the public key posted at the domain given in the DKIM header and comparing the signature embedded in the header with one the receiver calculates. If the signatures match, the message is considered authentic.

   *Detailed information can be found in [SP 800-177, section 4.5](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-177.pdf#page=46) and [RFC 6376](https://tools.ietf.org/html/rfc6376).*

In effect, both these techniques **allow a sending domain to "watermark" emails from their domain**, making spoofed emails easier to detect.

However, there is no inherent or widely-implemented mechanism in either standard to signal what a recipient should do with messages that fail SPF/DKIM validation. DMARC serves this role.

#### DMARC
<!-- [SP 800-177, section 4.6](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-177.pdf#page=54) -->
Domain-based Message Authentication, Reporting and Conformance, or **DMARC**, serves three primary functions:
* *Authentication*: It verifies alignment between the domain listed in the email address that gets displayed to an email recipient and the outcome of SPF and DKIM authentication checks.
* *Reporting*: It enables a reporting mechanism so an email sender can validate their email authentication setup is working as expected.
* *Conformance*: It allows a domain owner to establish what the final disposition of email that fails email authentication checks should be.

##### *Alignment and Conformance*
Different than the [`RFC5321.From`](#spf--dkim) address that is sent in the initial SMTP transaction, the [`RFC5322.From`](https://tools.ietf.org/html/rfc7489#section-5) address (also known as the [`message-From`](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-177.pdf#page=22) address) is typically the email address that is represented as the sender in email clients. DMARC requires "[alignment](https://tools.ietf.org/html/rfc7489#section-3.1)" between the domain in this very visible address and the domains that are authenticates in SPF and DKIM. This alignment can be "strict" (an exact match) or "relaxed" (must be a subdomain of the parent domain). Alignment is fully tunable in DMARC, with different options for SPF and DKIM alignment. DMARC's [default for alignment](https://tools.ietf.org/html/rfc7489#section-6.3) is "relaxed".

In order to satisfy DMARC filtering, *at least one of either SPF or DKIM [must](https://tools.ietf.org/html/rfc7489#section-4.2)* "pass" their authentication checks and be in alignment with the domain in the `message-From` address.

If not, DMARC allows a sender to set one of three separate policy states for email disposition:
1. block delivery of unauthenticated messages (noted in the DMARC record as `p=reject`),
2. place unauthenticated messages in the recipient’s junk email folder (`p=quarantine`), or
3. specify no guidance on how to treat unauthenticated messages (`p=none`). This setting should be viewed as a temporary policy setting before getting to `p=quarantine` and `p=reject`.

In other words, by using DMARC, a sending domain can instruct receiving email servers to **block delivery of all unauthenticated messages – such as phishing messages** – that claim to be from the sending domain.

##### *Reporting*

DMARC also enables a sending domain to request that participating email providers send it automatically generated reports about authentication results, thereby enabling the sending domain to monitor whether its SPF and DKIM policies are working properly.

In addition to monitoring proper configuration, this is valuable information one would not normally receive: if an attacker spoofs your domain, they are not likely to copy you on the spoofed email.

*More detailed information about DMARC can be found in [SP 800-177, section 4.6](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-177.pdf#page=54) and [RFC 7489](https://tools.ietf.org/html/rfc7489).*


#### What are DMARC reports?
DMARC reports are summaries of email authentication results that are automatically sent by [participating email providers](http://dmarc.io/sources/). They detail what the email provider saw from your domain over a given period of time, and facilitate the process of graduating to `p=reject`.

There are two kinds of reports:
1. **aggregate** reports
2. **failure** reports (sometimes called forensic reports)

Both reports provide information like the sending and receiving email domains, the DMARC policy that the email recipient discovered and applied, the identifier that was evaluated by SPF and/or DKIM and whether it was in [alignment](#alignment-and-conformance), the number of successful authentications, and the totals for all messages received. Aggregate reports are normally delivered once daily from mail receivers, whereas failure reports are sent immediately after an authentication failure. Failure reports include additional information about identity alignment, and can even include much of the body of the email and email headers, which can lead to the unintended exposure of private or personal information. Additionally, failure reports are only sent by a handful of ISPs, none of which are US-based.
- - -
#### See the [Compliance Guide](/guide) for more info.
* [What process should be followed in order to implement email authentication?](/guide/#what-process-should-be-followed-in-order-to-implement-email-authentication)
* [Can email authentication hinder my organization’s ability to deliver email?](/guide/#can-email-authentication-hinder-my-organizations-ability-to-deliver-email)
