# Requirements Analysis

## As a Business Analyst, Requirements Analysis Phase

### 1. Thorough Requirements Analysis

**Goal:** Accelerate, standardize and track the onboarding of new employees—from collection of documents to training and department integration—via a microservices-based backend.

**Primary Actors & Stakeholders:**
- New Employee
- HR Administrator
- Hiring Manager
- IT Administrator
- Trainer
- System Administrator

**Core Capabilities:**
- Employee profile capture
- Document collection & validation
- Onboarding task assignment & tracking
- Training session scheduling
- Department/team assignment
- Notifications & reminders
- Progress dashboards & reports

**Non-functional Requirements:**
- Security (PII at rest/in transit)
- Auditability (immutable event log)
- Scalability (≥1000 onboardings/month)
- Availability (99.9%)
- Extensibility (new services, workflows)

---

### 2. Functional Requirements Specification (FRS)

| ID   | Requirement                                                  | Priority |
|------|--------------------------------------------------------------|----------|
| FR-1 | New employee can submit personal data (name, contact, etc.) | High     |
| FR-2 | Employee uploads required docs (ID, tax forms, etc.)         | High     |
| FR-3 | HR can define & assign onboarding tasks                     | High     |
| FR-4 | Trainer can schedule training sessions & enroll employees    | Medium   |
| FR-5 | Manager can assign employees to departments/teams           | High     |
| FR-6 | System sends reminders for pending tasks/docs               | Medium   |
| FR-7 | Dashboard shows the status of each onboarding step          | Medium   |
| FR-8 | Admin generates audit report of completed onboardings       | Low      |

---

### 3. User Stories & Acceptance Criteria

**Employee Registration**  
- **Story:** As a new employee, I want to enter my personal details so that HR has my correct information.  
- **Acceptance Criteria:** Form validation; data persisted; confirmation email sent.

**Document Upload**  
- **Story:** As a new employee, I want to upload required documents so that HR can verify them.  
- **Acceptance Criteria:** Accepted file types (.pdf/.jpg); size ≤5 MB; status “Pending Review.”

**Task Assignment**  
- **Story:** As an HR admin, I want to assign onboarding tasks so that employees know what to do next.  
- **Acceptance Criteria:** Task template library; assignment saved; employee notified.

**Training Scheduling**  
- **Story:** As a trainer, I want to create training sessions so that new hires can enroll.  
- **Acceptance Criteria:** Session date/time; capacity check; enrollment confirmation.

**Department Integration**  
- **Story:** As a manager, I want to assign employees to my team so that they appear in my roster.  
- **Acceptance Criteria:** Department list; assignment persisted; roster updated.

**Progress Dashboard**  
- **Story:** As an HR admin, I want to view progress dashboards so that I can track onboarding in real time.  
- **Acceptance Criteria:** Show % complete per employee; drill-down to tasks/docs.

---

### 4. Domain Entities, Bounded Contexts & Aggregate Roots

**Bounded Contexts:**
- **Employee Management** (profile, identity)
- **Documentation** (uploads, review)
- **Task Tracking** (to-do items)
- **Training** (sessions, enrollment)
- **Department/Team** (assignments)
- **Notification** (emails, reminders)

**Key Domain Entities & Value Objects:**
- **Employee** (VO: Name, Email)
- **Document** (VO: FileMeta, Type)
- **OnboardingTask** (VO: Description, DueDate)
- **TrainingSession** (VO: Title, Schedule)
- **Department** (VO: Name, Manager)

**Aggregate Roots:**
- `EmployeeAggregate` (profile + tasks + docs)
- `DocumentAggregate` (doc + review status)
- `TaskAggregate` (task + assignments)
- `TrainingAggregate` (session + enrollments)

---

### 5. Business Rules & Workflows

#### A. New Employee Registration
1. Employee submits profile → validate mandatory fields → persist.
2. System assigns default “Welcome” task.

- **Rule BR-1:** Email must be unique.
- **Rule BR-2:** Required fields: name, email, start date.

#### B. Document Submission & Review
1. Employee uploads doc → status = Pending.
2. HR reviews → Approve/Reject → status updated.
3. On rejection, employee notified to re-upload.

- **Rule BR-3:** Only approved file types.
- **Rule BR-4:** Rejected docs must include rejection reason.

#### C. Task Assignment & Tracking
1. HR selects templates → assigns to employee.
2. Employee marks task “Done” → audit-logged.
3. Overdue tasks trigger reminders.

- **Rule BR-5:** Task due date ≥ start date.
- **Rule BR-6:** Cannot complete task before assignment.

#### D. Training Scheduling
1. Trainer creates session → sets capacity.
2. Employees enroll → check capacity.
3. Session reminder sent 24 h prior.

- **Rule BR-7:** Enrollment closes 1 h before session.

#### E. Department Integration
1. Manager assigns employee → triggers welcome email to team.
2. Employee appears on team dashboard.

- **Rule BR-8:** Only one department per employee at a time.

---

**Next:** Move to Architecture Design Phase as Solution Architect.
