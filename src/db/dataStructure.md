```Mermaid
erDiagram

  users ||--o{ users_to_clinics : has
  clinics ||--o{ users_to_clinics : has
  clinics ||--o{ doctors : has
  clinics ||--o{ patients : has
  clinics ||--o{ appointments : has
  doctors ||--o{ appointments : attends
  patients ||--o{ appointments : schedules

  users {
    uuid id PK
  }

  users_to_clinics {
    uuid userId FK
    uuid clinicId FK
    timestamp createdAt
    timestamp updatedAt
  }

  clinics {
    uuid id PK
    text name
    timestamp createdAt
  }

  doctors {
    uuid id PK
    uuid clinicId FK
    text name
    text avatarImageUrl
    text availableFromWeekDay
    text availableToWeekDay
    time availableFromTime
    time availableToTime
    text specialty
    integer appointmentPrice
    timestamp createdAt
    timestamp updatedAt
  }

  patients {
    uuid id PK
    uuid clinicId FK
    text name
    text email
    text phoneNumber
    timestamp createdAt
    timestamp updatedAt
  }

  appointments {
    uuid id PK
    uuid clinicId FK
    uuid patientId FK
    uuid doctorId FK
    timestamp date
    timestamp createdAt
    timestamp updatedAt
  }

```
