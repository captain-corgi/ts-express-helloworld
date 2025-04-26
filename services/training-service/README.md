# Training Service

Schedules training sessions and manages enrollments for onboarding.

## Features
- Schedule training sessions
- Manage enrollments
- Domain-driven design and Clean Architecture

## Endpoints
- `POST /api/sessions` — Schedule a training session

## Architecture
- Domain models, value objects, repository pattern
- In-memory and PostgreSQL repository adapters
- Express controller and routes

## Database Schema (PostgreSQL)
- `sessions` (id PK, title, starts_at, capacity)
- `enrollments` (id PK, session_id FK, employee_id FK, status)

## Business Rules
- Enrollment closes 1h before session
- Capacity checks enforced

## See Also
- [../Documents/RequirementsAnalysis.md](../../Documents/RequirementsAnalysis.md)
- [../Documents/ArchitectureDesign.md](../../Documents/ArchitectureDesign.md)
