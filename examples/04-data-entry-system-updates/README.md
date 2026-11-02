# Example 4: Data Entry & System Updates

**Scenario:** HR receives a monthly spreadsheet of employee address and job-title changes. A coordinator re-types each change into a legacy HR system that has no API.

## Before (manual)
- About 150 changes a month, 3 minutes each, roughly 7.5 hours
- Copy and paste mistakes lead to wrong addresses on payroll documents

## Automated flow
1. Read the monthly change spreadsheet
2. For each row, log in to the legacy HR application through its screens (UI automation)
3. Search the employee by ID, update the changed fields, and save
4. Read the value back to confirm it was saved
5. Write a log row (success or failure) and email the coordinator the summary

## Sample data
`sample_updates.csv` is the input. `expected_audit_log.csv` is the audit trail the automation produces, including one failure (employee not found).

## Illustrative result
| Metric | Manual | Automated |
|---|---|---|
| Time per month | ~7.5 hours | ~15 minutes (review of failures) |
| Keying errors | Several | None, with read-back verification |
| Audit trail | Rarely kept | Every change logged |

*Figures are illustrative.*
