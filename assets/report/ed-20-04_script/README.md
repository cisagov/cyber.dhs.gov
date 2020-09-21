## CVE 2020-1472 Patch Validation Script

_Assumption: WinRM is enabled between domain controllers._

### Required permissions:
  * If child domains are present: Enterprise admin
  * If single forest, single domain: Domain admin

This script must be run on a primary domain controller with required permissions. It will recursively query all the domain controllers within the Forest, using WMI to retrieve the **Domain Controller Name**, **Operating System (OS)** and **KB** that's installed. Results will be output to a folder called `CISA` created on the executing user's desktop. If the server does not have one of the relevant hotfixes installed the results will indicate `Compliance = "\$False"`.

### Usage:
1. Run the script in an elevated PowerShell console: `PS> .\CVE-2020-1472.ps1`
2. View the results on C:\\Users\\\<Executing User\>\\Desktop\\CISA\\\<Date\>\\Alert.csv
