---
layout: base
title: Binding Operational Directive 22-01 Vulnerability Repository
permalink: /bod/22-01/Vulnerability_Repository

subnav:
  - text: Background
    href: "#background"
  - text: Vulnerability Repository
    href: "#vulernability-repository"

October Day, Year
## Managing Unacceptable Risk Vulnerabilities Repository 

This page contains the Vulnerability Repository of the Cybersecurity and Infrastructure Security Agency's [Binding Operational Directive 22-01]({{ site.baseurl }}/assets/report/bod-22-01.pdf), _Managing Unacceptable Risk Vulnerabilities_.Additionally, see the Assistant Director’s [blog post](https://www.cisa.gov/blog/2020/09/02/improving-vulnerability-disclosure-together-officially).

*A binding operational directive is a [compulsory direction](https://uscode.house.gov/view.xhtml?req=(title:44%20section:3552%20edition:prelim)%20OR%20(granuleid:USC-prelim-title44-section3552)&f=treesort&edition=prelim&num=0&jumpTo=true) to federal, executive branch, departments and agencies for purposes of safeguarding federal information and information systems.*

*[Section 3553(b)(2) of title 44, U.S. Code](https://uscode.house.gov/view.xhtml?hl=false&edition=prelim&req=granuleid%3AUSC-prelim-title44-section3553&f=treesort&num=0&saved=%7CKHRpdGxlOjQ0IHNlY3Rpb246MzU1MiBlZGl0aW9uOnByZWxpbSkgT1IgKGdyYW51bGVpZDpVU0MtcHJlbGltLXRpdGxlNDQtc2VjdGlvbjM1NTIp%7CdHJlZXNvcnQ%3D%7C%7C0%7Cfalse%7Cprelim), authorizes the Secretary of the Department of Homeland Security (DHS) to develop and oversee the implementation of binding operational directives.*

*Federal agencies are [required](https://uscode.house.gov/view.xhtml?req=(title:44%20section:3554%20edition:prelim)%20OR%20(granuleid:USC-prelim-title44-section3554)&f=treesort&edition=prelim&num=0&jumpTo=true) to comply with DHS-developed directives.*

*These directives [do not apply](https://uscode.house.gov/view.xhtml?req=(title:44%20section:3553%20edition:prelim)%20OR%20(granuleid:USC-prelim-title44-section3553)&f=treesort&edition=prelim&num=0&jumpTo=true) to statutorily defined "national security systems" nor to certain systems operated by the Department of Defense or the Intelligence Community.*
- - -_. Additionally, see the Assistant Director’s [blog post](https://www.cisa.gov/blog/2020/09/02/improving-vulnerability-disclosure-together-officially).

*A binding operational directive is a [compulsory direction](https://uscode.house.gov/view.xhtml?req=(title:44%20section:3552%20edition:prelim)%20OR%20(granuleid:USC-prelim-title44-section3552)&f=treesort&edition=prelim&num=0&jumpTo=true) to federal, executive branch, departments and agencies for purposes of safeguarding federal information and information systems.*

*[Section 3553(b)(2) of title 44, U.S. Code](https://uscode.house.gov/view.xhtml?hl=false&edition=prelim&req=granuleid%3AUSC-prelim-title44-section3553&f=treesort&num=0&saved=%7CKHRpdGxlOjQ0IHNlY3Rpb246MzU1MiBlZGl0aW9uOnByZWxpbSkgT1IgKGdyYW51bGVpZDpVU0MtcHJlbGltLXRpdGxlNDQtc2VjdGlvbjM1NTIp%7CdHJlZXNvcnQ%3D%7C%7C0%7Cfalse%7Cprelim), authorizes the Secretary of the Department of Homeland Security (DHS) to develop and oversee the implementation of binding operational directives.*

*Federal agencies are [required](https://uscode.house.gov/view.xhtml?req=(title:44%20section:3554%20edition:prelim)%20OR%20(granuleid:USC-prelim-title44-section3554)&f=treesort&edition=prelim&num=0&jumpTo=true) to comply with DHS-developed directives.*

*These directives [do not apply](https://uscode.house.gov/view.xhtml?req=(title:44%20section:3553%20edition:prelim)%20OR%20(granuleid:USC-prelim-title44-section3553)&f=treesort&edition=prelim&num=0&jumpTo=true) to statutorily defined "national security systems" nor to certain systems operated by the Department of Defense or the Intelligence Community.*
- - -

### Background
The vulnerability repository below is in support of CISA's Binding Operational Directive (BOD) 22-01: Managing Unacceptable Risk Vulnerabilities in Federal Enterprise. BOD 22-01 establishes a CISA managed repository of vulnerabilities that carry unacceptable risk to the federal enterprise and establishes requirements for agencies to mitigate such vulnerabilities. Known exploited vulnerabilities represent the first threshold for CISA to determine when vulnerabilities pose an unacceptable risk to federal systems given the likelihood of their future exploitation. 

BOD 22-01 requires agencies to monitor this repository for updates and remediate each vulnerability according to the timelines set for each vulnerability in the repository below.      

### Vulnerability Repository
|   **CVE**    | **Description** | **Date Added** | **Required Actions & Alternatives** | **Due Date**| **Notes**|
| ------------- | ------------- | ------------- | ------------- |------------- | ------------- |
| [CVE-2021-34527](https://nvd.nist.gov/vuln/detail/CVE-2021-34527)| CISA has become aware of active exploitation, by multiple threat actors, of a vulnerability (CVE-2021-34527) in the Microsoft Windows Print Spooler service. Exploitation of the vulnerability allows an attacker to remotely execute code with system level privileges enabling a threat actor to quickly compromise the entire identity infrastructure of a targeted organization. The Microsoft Print Spooler service improperly performs privileged file operations and fails to restrict access to functionality that allows users to add printers and related drivers, which in turn allows a remote authenticated attacker to execute arbitrary code with SYSTEM privileges on a vulnerable system. CISA has validated various proofs of concept and is concerned that exploitation of this vulnerability may lead to full system compromise of agency networks if left unmitigated.| 07/13/2021| Stop and Disable the Print Spooler service on all Microsoft Active Directory (AD) Domain Controllers (DC).| 07/14/2021| For more guidance including options to mitigate please see https://cyber.dhs.gov/ed/21-04/.
| [CVE-2020-0601](https://nvd.nist.gov/vuln/detail/CVE-2020-0601)| The vulnerability in ECC certificate validation affects Windows 10, Server 2016, and Server 2019. It bypasses the trust store, allowing unwanted or malicious software to masquerade as authentically signed by a trusted or trustworthy organization, which may deceive users or thwart malware detection methods like anti-virus. Additionally, a maliciously crafted certificate could be issued for a hostname that did not authorize it, and a browser that relies on Windows’ CryptoAPI would not issue a warning, allowing an attacker to decrypt, modify, or inject data on user connections without detection.| 7/13/2021| Patch all affected endpoints.| 01/29/2021|Vulnerabilities in the Windows Remote Desktop client (affecting all supported versions of Windows, including Server) and RDP Gateway Server (affecting Server 2012, 2016, 2019) allow for remote code execution, where arbitrary code could be run freely. The server vulnerabilities do not require authentication or user interaction and can be exploited by a specially crafted request. The client vulnerability can be exploited by convincing a user to connect to a malicious server.

Though the Cybersecurity and Infrastructure Security Agency (CISA) is unaware of active exploitation of these vulnerabilities, once a patch has been publicly released, the underlying vulnerabilities can be reverse engineered to create an exploit. Aside from removing affected endpoints from the network, applying this patch is the only known technical mitigation to these vulnerabilities.

CISA has determined that these vulnerabilities pose an unacceptable risk to the Federal enterprise and require an immediate and emergency action. This determination is based on the likelihood of the vulnerabilities being weaponized, combined with the widespread use of the affected software across the Executive Branch and high potential for a compromise of integrity and confidentiality of agency information.| 01/14/2021| Patch all affected endpoints| 01/29/2021| Further guidance including FAQs can be found at https://cyber.dhs.gov/ed/20-02/|


