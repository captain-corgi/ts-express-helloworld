# Employee Service

This service manages employee profiles and identity for the New Employee Landing System.

## Features
- Employee registration (profile, email, start date)
- Unique email enforcement
- Domain-driven design (DDD) and Clean Architecture

## Endpoints
- `POST /api/employees` — Register a new employee

## Architecture
- Domain models, value objects, repository pattern
- In-memory and PostgreSQL repository adapters
- Express controller and routes

## Database Schema (PostgreSQL)
- `employees` (id PK, name, email, start_date, status)

## Business Rules
- **Email must be unique**: No two employees can register with the same email address (enforced at both application and DB layer).
- **Required fields**: Name, email, and start date are mandatory for registration.
- **Input validation**: Name must be at least 2 characters; email must be a valid email format; start date must be a valid date.
- **Status management**: New employees are created with status `PENDING`.
- **Result pattern**: All business logic returns a `Result<T, E>` for functional error handling (no exceptions for business errors).
- **Consistent error responses**: All errors are returned in JSON with appropriate HTTP status codes and messages.
- **OpenAPI contract**: API is documented with OpenAPI 3.0 spec in `/docs/openapi.yaml`.
- **Test coverage**: All business logic is covered by unit and integration tests.

## See Also
- [../Documents/RequirementsAnalysis.md](../../Documents/RequirementsAnalysis.md)
- [../Documents/ArchitectureDesign.md](../../Documents/ArchitectureDesign.md)
