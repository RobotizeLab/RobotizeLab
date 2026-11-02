# Example 3: Invoice & Document Processing

**Scenario:** Accounts Payable receives about 400 vendor invoices a month as PDF email attachments. Staff type each one into the ERP.

## Before (manual)
- Open each PDF, key in vendor, invoice number, date, amount, and PO number
- About 6 minutes per invoice, roughly 40 hours a month
- Typos cause payment errors and vendor disputes

## Automated flow
1. Monitor the AP mailbox and save attachments
2. Read each invoice (OCR and document extraction)
3. Validate against the purchase order and vendor master (see rules)
4. Post valid invoices to the ERP automatically
5. Send exceptions to an AP clerk with the reason

## Validation rules
| Rule | Check |
|---|---|
| V1 | Vendor exists in the vendor master |
| V2 | PO number exists and is open |
| V3 | Invoice amount is within 2% of the PO amount |
| V4 | Invoice number was not already processed |

## Sample data
`sample_extracted_invoices.csv` shows data extracted from 6 invoices. `expected_results.csv` shows how each is routed.

## Illustrative result
| Metric | Manual | Automated |
|---|---|---|
| Time per invoice | ~6 min | ~30 sec (exceptions only touched by staff) |
| Hours per month (400 invoices) | ~40 | ~8 |
| Straight-through rate | 0% | ~80% |

*Figures are illustrative.*
