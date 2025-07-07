API Design for Invoice Service

**Status:** Accepted

## Context

This ADR describes the decision to use an **RPC-style API** for managing invoices. The application revolves around creating, editing, and managing invoices with domain-specific behavior such as drafts, pending status, payment calculations, and status transitions like marking an invoice as paid.

The invoice structure includes nested fields, computed values, and business logic such as:

- `id` generation (e.g., `"ZX1122"`)
- Conditional status changes (`draft`, `pending`, `paid`)
- Calculated fields like `paymentDue` and `total`
- User actions with distinct UI triggers: "Save as Draft", "Save & Send", "Mark as Paid", "Delete"

This business logic maps more naturally to **action-oriented method calls** rather than traditional resource-based REST.

## Decision

We will expose a single endpoint:

```
POST /api/v1/invoice-service
```

The client sends a JSON payload with a `method` name and associated `params`. Each method encapsulates a user-facing action and business rule.

### Supported Methods

#### `CreateInvoice`

Creates a new invoice. The backend generates an ID (e.g., `ZX1122`) if not provided.

```json
{
  "method": "CreateInvoice",
  "params": {
    "status": "draft",
    "formData": {
      "clientName": "",
      "paymentTerms": 15,
      "createdAt": "2022-01-05",
      "items": []
    }
  }
}
```

- If `status` is `"draft"`, incomplete fields are allowed.
- If `"pending"`, all required fields must be present.
- The following is calculated:
  - `paymentDue = createdAt + paymentTerms (days)`
  - `total = sum of items[].total`

---

#### `UpdateInvoice`

Updates an invoice, used when editing.

```json
{
  "method": "UpdateInvoice",
  "params": {
    "invoiceId": "ZX1122",
    "formData": {
      "clientName": "Linda Brown",
      "paymentTerms": 15,
      "createdAt": "2022-01-05",
      "items": [...]
    },
    "promoteToPending": true
  }
}
```

- All fields are required.
- If `promoteToPending` is `true`, the invoice status changes from `"draft"` to `"pending"`.

---

#### `MarkInvoiceAsPaid`

Marks an existing invoice as paid.

```json
{
  "method": "MarkInvoiceAsPaid",
  "params": {
    "invoiceId": "ZX1122"
  }
}
```

- Changes the `status` to `"paid"`.

---

#### `DeleteInvoice`

Deletes an invoice.

```json
{
  "method": "DeleteInvoice",
  "params": {
    "invoiceId": "ZX1122",
    "confirmed": true
  }
}
```

- Requires `confirmed: true` to prevent accidental deletion.

---

#### `ListInvoices`

Lists invoices, optionally filtered by status.

```json
{
  "method": "ListInvoices",
  "params": {
    "status": "pending"
  }
}
```

Returns an array of invoices matching the filter.

---

#### `GetInvoice`

Fetches a single invoice by ID.

```json
{
  "method": "GetInvoice",
  "params": {
    "invoiceId": "ZX1122"
  }
}
```

---

## Alternatives Considered

### RESTful Design

Initially considered using RESTful endpoints:

- `POST /api/v1/invoices`
- `PATCH /api/v1/invoices/{invoiceId}`
- `DELETE /api/v1/invoices/{invoiceId}`

However, this approach made it harder to capture action-specific behavior like:

- `"Save & Send"` promoting status
- `"Mark as Paid"` vs general update
- Invoice ID generation rules

---

## Consequences

- More explicit mapping to frontend actions (good for UI-driven apps).
- Centralized validation and logic in a method-dispatching backend.
- May be harder to integrate with REST-based tools or public consumers.

## Related

- [What’s the Difference Between RPC and REST?](https://aws.amazon.com/compare/the-difference-between-rpc-and-rest/?nc1=h_ls)
- [RPC vs. REST: A comprehensive Comparison](https://medium.com/@utkarshshukla.author/rpc-vs-rest-a-comprehensive-comparison-88d0c7e13687)
