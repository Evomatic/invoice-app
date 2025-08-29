# Invoice App Development Roadmap

### Phase 1: Essential Backend Improvements

#### 1.2 Core Business Logic
- [x] **Invoice ID generation** (2 random letters + 4 random numbers)
- [ ] **Payment due calculation** (createdAt + paymentTerms days)
- [ ] **Invoice total calculation** from items

### Phase 2: Core Frontend Development

#### 2.1 Essential UI Components
- [ ] **Invoice List View** with basic status filtering
- [ ] **Invoice Detail View** showing all invoice information
- [ ] **Simple Invoice Form** for create/edit operations
- [ ] **Status Badge Components** (draft/pending/paid)
- [ ] **Basic confirmation modal** for delete operations

#### 2.2 Simple State Management
- [ ] **Use Nuxt's built-in state** instead of Pinia initially
- [ ] **Basic error handling** without complex error boundaries
- [ ] **Loading states** for API calls

#### 2.3 Form Handling
- [ ] **Dynamic invoice items** (add/remove items)
- [ ] **Address forms** for sender and client
- [ ] **Basic form validation** with simple checks