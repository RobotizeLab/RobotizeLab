# Example 5: Reconciliations

**Scenario:** At month end, finance matches bank transactions to the general ledger (GL). It takes days of VLOOKUPs and delays the close.

## Before (manual)
- Export bank statement and GL entries, then match by hand in Excel
- 2 to 3 days of effort every month
- Differences are found late, when it is hard to trace them

## Automated flow
1. Load the bank file and GL export
2. Match each bank line to a GL entry (see rules)
3. Categorize leftovers: **Matched**, **Amount difference**, **Missing in GL**, **Missing in bank**
4. Send each exception to its owner with the details
5. Produce a one-page summary for the controller

## Matching rules
1. Same `reference` and same `amount` = Matched
2. Same `reference` but different `amount` = Amount difference
3. Reference found in only one source = Missing in GL or Missing in bank

## Sample data
`sample_bank.csv` and `sample_gl.csv` are the two inputs. `expected_reconciliation.csv` is the result.

## Illustrative result
| Metric | Manual | Automated |
|---|---|---|
| Effort per close | 2 to 3 days | ~1 hour (review of exceptions) |
| Exceptions found | At month end | Same day they occur, if run daily |
| Close cycle | Delayed | Shorter by days |

*Figures are illustrative.*
