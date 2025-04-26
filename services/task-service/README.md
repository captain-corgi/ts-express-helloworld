# Task Service

Assigns and tracks onboarding tasks for new employees.

## Features
- Assign onboarding tasks
- Task status: Pending, Done, Overdue
- Domain-driven design and Clean Architecture

## Endpoints
- `POST /api/tasks` — Assign a task

## Architecture
- Domain models, value objects, repository pattern
- In-memory and PostgreSQL repository adapters
- Express controller and routes

## Database Schema (PostgreSQL)
- `tasks` (id PK, employee_id FK, template_id FK, description, due_date, status)

## Business Rules
- Task due date ≥ start date
- Cannot complete task before assignment

## See Also
- [../Documents/RequirementsAnalysis.md](../../Documents/RequirementsAnalysis.md)
- [../Documents/ArchitectureDesign.md](../../Documents/ArchitectureDesign.md)
