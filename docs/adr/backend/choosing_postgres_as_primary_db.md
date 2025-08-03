# Adopt PostgreSQL as the Primary Database

## Context

Building an app that contains invoices, line items, billing addresses, payment statuses, and associated metadata. The data model is highly structured, consistent, and relational in nature, and it requires strong guarantees around data integrity and transactional behavior.

The app will support the following functionality:

- Creating and updating invoices
- Listing invoices with filtering and pagination
- Generating totals based on line items
- Tracking invoice status and due dates
---

## Decision

We will use **PostgreSQL** as our primary database engine.

---

## Reason

| Requirement               | Why relational/PostgreSQL Meets It                                                                 |
|---------------------------|------------------------------------------------------------------------------------------| 
| Data consistency & integrity | Strong ACID guarantees with constraints, types, and transactions                       |
| Scalability                | Horizontal scaling with read replicas and connection pooling                           |
| Performance                | Mature query planner and indexing system                                               |                |
| Data Accuracy         | Using primary and foreign keys ensure there is no duplicate information
| Normalization         | data anomalies are reduced or eliminated

---

## Alternatives Considered

### MongoDB (NoSQL)
- ❌ Poor fit for relational structure
- ✅ Schema flexibility and developer speed
---

## Consequences

- We'll define and manage a normalized schema using SQL migrations or an ORM.
- The relational model allows for flexible querying and reporting.
