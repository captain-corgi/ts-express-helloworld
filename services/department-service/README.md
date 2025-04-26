# Department Service

Manages department/team assignments for employees.

## Features
- Assign employees to departments/teams
- One department per employee at a time
- Domain-driven design and Clean Architecture

## Endpoints
- `POST /api/assignments` — Assign employee to department

## Architecture
- Domain models, value objects, repository pattern
- In-memory and PostgreSQL repository adapters
- Express controller and routes

## Database Schema (PostgreSQL)
- `departments` (id PK, name, manager_id FK)
- `assignments` (id PK, department_id FK, employee_id FK, assigned_at)

## Business Rules
- Only one department per employee at a time

## See Also
- [../Documents/RequirementsAnalysis.md](../../Documents/RequirementsAnalysis.md)
- [../Documents/ArchitectureDesign.md](../../Documents/ArchitectureDesign.md)
