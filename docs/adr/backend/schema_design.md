# Schema Design

## Context

To support a robust invoices application, we need a clear and normalized database schema.
The data includes invoices, items, clients, and address information — each with distinct attributes and relationships.
---

## Decision

Schema:
📎 [Schema Diagram – invoices_erd.png](sandbox:/mnt/data/invoices_erd.png)

The schema includes four main entities:

| Table           | Description                                                 |
|------------------|-------------------------------------------------------------|
| `addresses`     | Stores both client and sender address data                   |
| `clients`       | Stores client name, email, and references an address         |
| `invoices`      | Represents each invoice, referencing a client and sender address |
| `invoice_items` | Represents individual line items linked to invoices         |

- **1-to-Many:** A client can have multiple invoices
- **1-to-Many:** An invoice can have multiple items

---

## Reason

- ✅ **Extensibility:** Schema can grow (e.g., payments, audit logs, user accounts)
- ✅ **Reusability:** Shared `addresses` table supports DRY principles
- ✅ **Maintainability:** Foreign keys enforce data consistency and reduce bugs

---

## Alternatives Considered

### Flat or Denormalized Schema

A single-table or JSON-based structure would simplify development but:

- ❌ Repeats address and client data across invoices
- ❌ Lacks foreign key constraints and relational power

---

**Vocabulary**
- normalized: organizes the data into smaller, connected tables using relationships (foreign keys).
- 