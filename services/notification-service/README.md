# Notification Service

Dispatches onboarding notifications and reminders.

## Features
- Send reminders for pending tasks/docs
- Notification event types (email, reminders)
- Domain-driven design and Clean Architecture

## Endpoints
- `POST /api/notifications` — Send a notification

## Architecture
- Domain models, value objects, repository pattern
- In-memory and PostgreSQL repository adapters
- Express controller and routes

## Database Schema (PostgreSQL)
- `notifications` (id PK, event_type, payload JSON, sent_at)

## Business Rules
- Reminders for pending tasks/docs

## See Also
- [../Documents/RequirementsAnalysis.md](../../Documents/RequirementsAnalysis.md)
- [../Documents/ArchitectureDesign.md](../../Documents/ArchitectureDesign.md)
