# Example 7: Onboarding & Offboarding

**Scenario:** When someone joins or leaves, HR, IT, and the manager each handle separate tasks by email. Steps get missed, and leavers sometimes keep access.

## Before (manual)
- 10+ manual steps across 4 teams for each joiner
- New hires wait days for equipment and accounts
- Leavers' access is removed late, which is a security risk

## Automated flow (trigger: new row in the HR system)
**Joiner**
1. Create the user account and email
2. Assign access groups based on department and role (see access matrix)
3. Create the equipment request and add the person to the welcome schedule
4. Notify the manager and the new hire

**Leaver**
1. Disable the account on the last working day
2. Remove all access groups
3. Create a ticket to collect equipment
4. Send a confirmation to HR and security

## Access matrix
| Department | Access groups |
|---|---|
| Finance | ERP-Finance, SharePoint-Finance |
| Sales | CRM-Sales, SharePoint-Sales |
| IT | Admin-Tools, SharePoint-IT |
| All | Email, Teams, Intranet |

## Sample data
`sample_hr_events.csv` is the trigger data. `expected_actions.csv` lists the actions the automation performs.

## Illustrative result
| Metric | Manual | Automated |
|---|---|---|
| Effort per joiner | ~2 hours across teams | ~5 minutes of review |
| Day-one readiness | Often late | Ready on day one |
| Access removal for leavers | Days late | Same day |

*Figures are illustrative.*
