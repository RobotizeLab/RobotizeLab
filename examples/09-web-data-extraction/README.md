# Example 9: Web & Application Data Extraction

**Scenario:** A procurement team opens four supplier and regulator websites every morning to copy prices, stock status, and notices into Excel, and to see whether anything changed.

## Before (manual)
- Visit each website and copy values by hand, about 45 minutes a day
- Easy to forget, so changes are noticed late
- No history of what changed and when

## Automated flow
1. Read `watchlist.csv` (what to check and where) and `alert_rules.csv`
2. Open each website, logging in if needed
3. Extract the price, stock status, or notice count
4. Compare with the last known value and apply the alert rules
5. Save **one** daily results file, `expected_daily_web_check.csv`, and send alerts

## Robustness rules
| Situation | What the automation does |
|---|---|
| Website is unreachable | Retry 3 times, then alert IT |
| Page layout changed | Alert the automation team |
| Value changed | Alert the owner by email or chat |
| Every run | Add a row to the history file |

## Illustrative result
| Metric | Manual | Automated |
|---|---|---|
| Time per day | ~45 minutes | ~1 minute of review |
| Frequency | Once a day, if remembered | As often as needed, even hourly |
| Missed changes | Common | Rare |

*Data is fictional and figures are illustrative.*
