# Example 1: Data Quality Checks

**Scenario:** A regional healthcare group receives a weekly patient-registration extract. Analysts spot-check it in Excel before it feeds reports, and errors still slip through.

## Before (manual)
- Analyst opens the file and scans for blanks, duplicates, and bad formats
- Checks a sample of ~5% of rows, about 3 hours per week
- Errors found later by report users, which causes rework

## Automated flow
1. Pick up the weekly file from the shared folder
2. Run the rules below on every row
3. Write clean rows to `clean_output` and bad rows to an exception file with the reason
4. Email the data owner a summary with the exception count

## Rules applied
| Rule | Check |
|---|---|
| R1 | `patient_id` is not blank |
| R2 | `patient_id` is unique |
| R3 | `dob` is a valid date and not in the future |
| R4 | `email` matches a valid format |
| R5 | `zip` is exactly 5 digits |
| R6 | `status` is one of Active, Inactive |

## Sample data
`sample_input.csv` has 10 rows with deliberate errors. `expected_exceptions.csv` shows what the automation should flag (rows 2, 4, 5, 7, 9).

## Illustrative result
| Metric | Manual | Automated |
|---|---|---|
| Rows checked | ~5% sample | 100% |
| Time per week | 3 hours | ~5 minutes (review of exceptions) |
| Errors reaching reports | Several per month | Near zero |

*Figures are illustrative.*
