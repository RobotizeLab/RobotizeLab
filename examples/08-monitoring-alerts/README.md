# Example 8: Monitoring & Alerts

**Scenario:** Operations relies on several nightly files and a daily orders queue. Nobody notices a late file or a growing backlog until customers complain.

## Before (manual)
- Someone checks folders and dashboards a few times a day
- Problems are found hours late, often after the business impact

## Automated flow (runs every 15 minutes)
1. Check each monitored item against its rule (see table)
2. If a rule is breached, send an alert to the owner by email or chat
3. If a safe fix exists (for example, restart a failed job), run it automatically
4. Re-check; escalate to the manager if still breached after 30 minutes
5. Log every check and alert for reporting

## Monitoring rules
| Item | Rule | Alert to | Automatic action |
|---|---|---|---|
| Nightly sales file | Must arrive by 6:00 AM | Data team | Re-request from source |
| Orders queue | Backlog above 500 items | Operations lead | None |
| Daily load job | Status must be Success | Data team | Restart once |
| Disk space on file server | Above 85% used | IT | None |

## Sample data
`sample_checks.csv` is one monitoring run. `expected_alerts.csv` shows the alerts the automation sends.

## Illustrative result
| Metric | Manual | Automated |
|---|---|---|
| Time to detect a problem | Hours | Under 15 minutes |
| Staff time on checking | ~1 hour a day | None |
| Coverage | Business hours | 24/7 |

*Figures are illustrative.*
