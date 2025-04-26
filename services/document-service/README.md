# Document Service

Handles document uploads and review for onboarding employees.

## Features
- Upload and manage required documents (ID, tax forms, etc.)
- Document status: Pending, Approved, Rejected
- Domain-driven design and Clean Architecture

## Endpoints
- `POST /api/documents` — Upload a document

## Architecture
- Domain models, value objects, repository pattern
- In-memory and PostgreSQL repository adapters
- Express controller and routes

## Database Schema (PostgreSQL)
- `documents` (id PK, employee_id FK, type, url, status, reviewed_at)

## Business Rules
- Only approved file types
- Rejected docs must include rejection reason

## See Also
- [../Documents/RequirementsAnalysis.md](../../Documents/RequirementsAnalysis.md)
- [../Documents/ArchitectureDesign.md](../../Documents/ArchitectureDesign.md)
