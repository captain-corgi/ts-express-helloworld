# Architecture Design

## As a Solution Architect, Architecture Design Phase

### 1. Overall Microservices Architecture
We’ll decompose by bounded contexts into six core services:
1. **employee-service** – manages profiles & identity
2. **document-service** – handles uploads & review
3. **task-service** – assigns and tracks onboarding tasks
4. **training-service** – schedules sessions & enrollments
5. **department-service** – manages team assignments
6. **notification-service** – dispatches emails/reminders

An **API Gateway** will expose public HTTP endpoints; internal sync calls go via REST, async events via a message broker (e.g. RabbitMQ).

---

### 2. Service Boundaries & Communication
- Each service owns its own PostgreSQL schema.
- **Sync**: REST + JSON over HTTPS (intra-cluster).
- **Async**: Domain events (e.g. `EmployeeCreated`, `DocumentApproved`) via AMQP.
- **API Gateway** handles auth, routing, rate-limit.

---

### 3. Data Models & Schema Sketches

#### employee-service (schema `employee`)
- `employees` (id PK, name, email, start_date, status)

#### document-service (schema `document`)
- `documents` (id PK, employee_id FK, type, url, status, reviewed_at)

#### task-service (schema `task`)
- `tasks` (id PK, employee_id FK, template_id FK, description, due_date, status)

#### training-service (schema `training`)
- `sessions` (id PK, title, starts_at, capacity)
- `enrollments` (id PK, session_id FK, employee_id FK, status)

#### department-service (schema `department`)
- `departments` (id PK, name, manager_id FK)
- `assignments` (id PK, department_id FK, employee_id FK, assigned_at)

#### notification-service (no own DB; reads via events + stores logs)
- `notifications` (id PK, event_type, payload JSON, sent_at)

---

### 4. API Contracts & Documentation Standards
- Each service provides an OpenAPI v3 spec in `/docs/openapi.yaml`.
- Standard endpoints:
  - `GET /<resource>`
  - `GET /<resource>/:id`
  - `POST /<resource>`
  - `PUT /<resource>/:id`
  - `DELETE /<resource>/:id`
- Responses follow JSON:API style.
- All specs published to a shared developer portal (Swagger UI).

---

### 5. Monorepo Folder Structure
```
/ (monorepo root)
├── services/
│   ├── employee-service/
│   ├── document-service/
│   ├── task-service/
│   ├── training-service/
│   ├── department-service/
│   └── notification-service/
├── libs/             # shared DTOs, types, utilities
├── infra/            # AMQP config, API Gateway, CI/CD
├── docs/
│   ├── RequirementsAnalysis.md
│   └── ArchitectureDesign.md
├── .windsurfrules
├── .continuerules
├── .augment-guidelines
├── package.json      # workspace definitions
└── tsconfig.json     # base config + per-service overrides
```

---

### Next Steps
1. Scaffold monorepo with workspaces (`pnpm`/`yarn`).
2. Begin implementing core domain models in each service.
