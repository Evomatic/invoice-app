# 🗺️ Frontend Roadmap (Invoices App)

## Phase 1 – Layout & Theming
- [ ] Implement global layout (sidebar/header, content area).
- [ ] Add **dark/light mode toggle** with persistence in localStorage.
- [ ] Make layout responsive (desktop, tablet, mobile).
- [ ] Create shared components: `Button`, `Card`, `Badge`, `Modal`.

---

## Phase 2 – Invoice List Page
- [ ] Fetch invoices from backend (`GET /api/v1/invoices`).
- [ ] Display list in cards with status badge (Draft / Pending / Paid).
- [ ] Add **filtering by status** (UI + query to backend).
- [ ] Implement empty state (“No invoices”).

---

## Phase 3 – Invoice Details Page
- [ ] Fetch single invoice (`GET /api/v1/invoices/:id`).
- [ ] Show sender + client addresses, line items, and total.
- [ ] Add action buttons:
  - **Edit Invoice** → opens form modal
  - **Delete Invoice** → opens confirmation modal
  - **Mark as Paid** → triggers API update
- [ ] Handle error states (invoice not found, network errors).

---

## Phase 4 – Invoice Form (Create & Edit)
- [ ] Create **New Invoice** modal.
- [ ] Add form fields: client info, sender info, items, payment terms.
- [ ] Support **Save as Draft** (incomplete allowed, status = draft).
- [ ] Support **Save & Send** (requires validation, status = pending).
- [ ] Support **Edit Invoice** (prefill form with API data).
- [ ] Handle form submission errors and display inline messages.

---

## Phase 5 – State & Data Handling
- [ ] Create `useInvoices` composable to handle API calls (CRUD).
- [ ] Centralize loading/error state handling.
- [ ] Use optimistic UI updates where possible (e.g., marking paid).
- [ ] Cache recent invoices for faster navigation.
