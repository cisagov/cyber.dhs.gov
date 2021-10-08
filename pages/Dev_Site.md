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
| CVE-2021-34527)| CISA has become aware of active exploitation, by multiple threat actors, of a vulnerability (CVE-2021-34527) in the Microsoft Windows Print Spooler service. Exploitation of the vulnerability allows an attacker to remotely execute code with system level privileges enabling a threat actor to quickly compromise the entire identity infrastructure of a targeted organization.

The Microsoft Print Spooler service improperly performs privileged file operations and fails to restrict access to functionality that allows users to add printers and related drivers, which in turn allows a remote authenticated attacker to execute arbitrary code with SYSTEM privileges on a vulnerable system. CISA has validated various proofs of concept and is concerned that exploitation of this vulnerability may lead to full system compromise of agency networks if left unmitigated.

CISA has determined that this vulnerability poses an unacceptable risk to Federal Civilian Executive Branch agencies and requires emergency action. This determination is based on the current exploitation of this vulnerability by threat actors in the wild, the likelihood of further exploitation of the vulnerability, the prevalence of the affected software in the federal enterprise, and the high potential for a compromise of agency information systems.| 7/13/2021| Yes| N/A| 


