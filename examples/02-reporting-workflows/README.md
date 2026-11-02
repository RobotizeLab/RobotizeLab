# Example 2: Reporting Workflows

**Scenario:** Every Monday a finance team publishes a weekly sales report. An analyst pulls data from three places, builds the spreadsheet, and emails 12 stakeholders.

## Before (manual)
- Export sales from CRM, costs from ERP, and targets from a shared Excel file
- Copy, paste, and format into a template, about 4 hours each week
- Email the report by hand, often late or with copy/paste mistakes

## Automated flow
1. **Monday 6:00 AM:** a scheduled trigger starts the process
2. Pull the three sources and combine them
3. Calculate KPIs (revenue, margin, % of target)
4. Fill the report template and save as Excel and PDF
5. Run sanity checks, for example: stop and alert the analyst if revenue changed by more than 40% week over week
6. Email the report to the distribution list

## Sample data
`sample_sales.csv` is the combined input. `expected_summary.csv` is the KPI output by region.

## Illustrative result
| Metric | Manual | Automated |
|---|---|---|
| Effort per week | 4 hours | ~10 minutes (review) |
| Delivered | Monday afternoon, sometimes Tuesday | Monday 7:00 AM, every time |
| Copy/paste errors | Occasional | None |

*Figures are illustrative.*
