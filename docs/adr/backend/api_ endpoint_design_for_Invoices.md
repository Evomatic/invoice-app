API Design for Invoice Service (RESTful)

**Status:** Accepted

## Context

This ADR describes the decision to use a **RESTful API** for managing invoices. The application revolves around creating, editing, and managing invoices with domain-specific behavior such as drafts, pending status, payment calculations, and status transitions like marking an invoice as paid.

The invoice structure includes nested fields, computed values, and business logic such as:

- `id` generation (e.g., `"ZX1122"`)
- Conditional status changes (`draft`, `pending`, `paid`)
- Calculated fields like `paymentDue` and `total`
- User actions with distinct UI triggers: "Save as Draft", "Save & Send", "Mark as Paid", "Delete"

This business logic is mapped to resource-based endpoints and HTTP methods.

## Decision

We will expose the following endpoints:

### Endpoints

#### `POST /api/v1/invoices`

Creates a new invoice. The backend generates an ID (e.g., `ZX1122`) if not provided.

- If `status` is `"draft"`, incomplete fields are allowed.
- If `"pending"`, all required fields must be present.
- The following is calculated:
  - `paymentDue = createdAt + paymentTerms (days)`
  - `total = sum of items[].total`

**Request Example:**
```json
{
  "status": "draft",
  "clientName": "",
  "paymentTerms": 15,
  "createdAt": "2022-01-05",
  "items": []
}
```

---

#### `PATCH /api/v1/invoices/{invoiceId}`

Updates an invoice, used when editing.

- All fields are required for `"pending"` status.
- To promote a draft to pending, include `"status": "pending"` in the payload.

**Request Example:**
```json
{
  "clientName": "Linda Brown",
  "paymentTerms": 15,
  "createdAt": "2022-01-05",
  "items": [...],
  "status": "pending"
}
```

---

#### `DELETE /api/v1/invoices/{invoiceId}`

Deletes an invoice.

- Requires a confirmation flag in the request body to prevent accidental deletion.

**Request Example:**
```json
{
  "confirmed": true
}
```

---

#### `GET /api/v1/invoices`

Returns an array of invoices matching the filter.

---

#### `GET /api/v1/invoices/{invoiceId}`

Fetches a single invoice by ID.

---

## Consequences

- Follows standard REST conventions, making it easier to integrate with third-party tools and consumers.
- Validation and business logic are distributed across multiple endpoints.

## Related

- [What’s the Difference Between RPC and REST?](https://aws.amazon.com/compare/the-difference-between-rpc-and-rest/?nc1=h_ls)
- [RPC vs. REST: A comprehensive Comparison](https://medium.com/@utkarshshukla.author/rpc-vs-rest-a-comprehensive-comparison-88d0c7e13687)
