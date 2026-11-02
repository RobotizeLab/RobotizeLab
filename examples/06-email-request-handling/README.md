# Example 6: Email & Request Handling

**Scenario:** A shared "support@" inbox receives about 100 requests a day. Staff read each email, decide where it belongs, and create a ticket by hand.

## Before (manual)
- Each email takes about 4 minutes to read, classify, and log
- Requests sit unread overnight and on weekends
- Wrong routing causes delays

## Automated flow
1. Monitor the inbox continuously
2. Classify each email by rules or keywords (see routing table)
3. Extract key details: customer ID, order number, and urgency
4. Create a ticket in the right queue
5. Reply to the sender with the ticket number
6. Anything it cannot classify goes to a human queue

## Routing table
| If the email mentions | Category | Queue | Priority |
|---|---|---|---|
| refund, return | Refund | Billing | Normal |
| invoice, payment | Billing | Billing | Normal |
| password, login, locked | Access | IT Help | High |
| cancel, cancellation | Cancellation | Retention | High |
| none of the above | Unclassified | Human review | Normal |

## Sample data
`sample_emails.csv` is the input. `expected_tickets.csv` is what the automation creates.

## Illustrative result
| Metric | Manual | Automated |
|---|---|---|
| Time per email | ~4 min | Seconds (about 80% handled without touch) |
| Response time | Hours | Under 2 minutes, 24/7 |
| Misrouted requests | Frequent | Rare |

*Figures are illustrative.*
