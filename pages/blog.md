---
layout: base
title: CISA blog
permalink: /blog/

subnav:
  - text: January 24, 2019
    href: "#cisa-blog"
---
January 24, 2019
## Why CISA issued our first Emergency Directive
*By Christopher Krebs, Director*

On Tuesday January 22nd, I released [Emergency Directive 19-01]({{ site.baseurl }}/ed/19-01), *Mitigate DNS Infrastructure Tampering*, directing Federal civilian agencies to take a series of immediate actions in response to a global Domain Name System (DNS) hijacking campaign. This is the first Emergency Directive issued by the Cybersecurity and Infrastructure Security Agency (CISA) under authorities granted by Congress in the Cybersecurity Act of 2015, and we took this action after carefully considering the current and potential risk posed to Federal agencies.

### Addressing addresses
DNS is part of the global internet infrastructure that translates between the names humans prefer and the numbers computers need to access a website or send an email. Once you obtain a domain name – say `cisa.gov` – you control what number that name resolves to (as well as related names, like `www.cisa.gov`) via a mechanism called a “DNS record”.

Like real life, if someone can change your address, lots of bad things can happen. The same is true of DNS.

In this case — as [revealed](https://www.us-cert.gov/ncas/current-activity/2019/01/10/DNS-Infrastructure-Hijacking-Campaign) by FireEye researchers a little over a week ago, with related reporting by Cisco Talos in late 2018 – malicious actors obtained access to accounts that controlled DNS records and made them resolve to their own infrastructure before relaying it to the real address. Because they could control an organization’s DNS, they could obtain legitimate digital certificates and decrypt the data they intercepted – all while everything looked normal to users.

This is roughly equivalent to someone lying to the post office about your address, checking your mail, and then hand delivering it to your mailbox. Lots of harmful things could be done to you (or the senders) depending on the content of that mail.

### An urgent response
While we continue to assess the impact on Federal infrastructure, we know enough to be concerned.

* We know an active attacker is targeting government organizations.
* Using techniques that aren’t especially innovative, we know they can intercept and manipulate legitimate traffic, make services unavailable or cause delay, harvest information like credentials or emails, or cause a range of other malicious activities.
* We know that this type of attack isn’t something many organizations monitor for or have tight controls around.

Because it’s our responsibility to take actions to protect Federal systems, we felt an urgent response was required to address the risk.

Informed by security researchers and in consultation with IT security teams across Federal civilian agencies, the Office of Management and Budget, and the National Institute of Standards and Technology, we’ve crafted a set of [near-term mitigations]({{ site.baseurl }}/ed/19-01/#required-actions) that protect systems in a risk-informed, straightforward, and high impact manner. We’ve directed agencies to:

1. **Verify their DNS records** to ensure they’re resolving as intended and not redirected elsewhere. This will help spot any active DNS hijacks.
2. **Update DNS account passwords**. This will disrupt access to accounts an unauthorized actor might currently have.
3. **Add multi-factor authentication** to the accounts that manage DNS records. This will also disrupt access, and harden accounts to prevent future attacks.
4. **Monitor Certificate Transparency logs** for certificates issued that the agency did not request. This will help defenders notice if someone is attempting to impersonate them or spy on their users.

In several cases, the actions we’ve crafted are basic good practices anyway, and many agencies may have already taken the necessary mitigation steps. Monitoring [Certificate Transparency](https://www.certificate-transparency.org/how-ct-works), which is a recent contribution from the internet security community, may be new for some agencies. CISA is committed to using modern security tools and techniques to assist the nation’s defenders.

While the Emergency Directive only applies to Federal civilian executive branch agencies that are not part of the Intelligence Community, the Directive includes common sense guidance and mitigation steps any organization can take to prevent DNS infrastructure tampering. We encourage anyone with questions to [reach out](mailto:NCCICcustomerservice@hq.dhs.gov).

### Team Internet
We also recognize we don’t have all the answers, and we welcome feedback and collaboration. Thanks to our private sector partners that alerted us to this issue and brought us along with you. Working together as a team in a Collective Defense model, we can shift the advantage back to the defender and make the internet a safer place for everyone.
