import { relations } from "drizzle-orm";
<<<<<<< HEAD
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  time,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  stripeCustomerId: text("stripe_customer_id"),
  stripeSubscriptionId: text("stripe_subscription_id"),
  plan: text("plan"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
=======
import { integer, pgEnum, text, time, timestamp, uuid } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
  
export const usersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
>>>>>>> main
});

export const usersTableRelations = relations(usersTable, ({ many }) => ({
  usersToClinics: many(usersToClinicsTable),
}));

<<<<<<< HEAD
export const sessionsTable = pgTable("sessions", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
});

export const accountsTable = pgTable("accounts", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verificationsTable = pgTable("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

=======
>>>>>>> main
export const clinicsTable = pgTable("clinics", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
<<<<<<< HEAD
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const usersToClinicsTable = pgTable("users_to_clinics", {
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  clinicId: uuid("clinic_id")
    .notNull()
    .references(() => clinicsTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const usersToClinicsTableRelations = relations(
  usersToClinicsTable,
  ({ one }) => ({
    user: one(usersTable, {
      fields: [usersToClinicsTable.userId],
      references: [usersTable.id],
    }),
    clinic: one(clinicsTable, {
      fields: [usersToClinicsTable.clinicId],
      references: [clinicsTable.id],
    }),
  }),
);

=======
});

export const usersToClinicsTable = pgTable("users_to_clinics", {
  userId: uuid("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }).notNull(),
  clinicId: uuid("clinic_id").references(() => clinicsTable.id, { onDelete: "cascade" }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
});

>>>>>>> main
export const clinicsTableRelations = relations(clinicsTable, ({ many }) => ({
  doctors: many(doctorsTable),
  patients: many(patientsTable),
  appointments: many(appointmentsTable),
  usersToClinics: many(usersToClinicsTable),
}));

<<<<<<< HEAD
export const doctorsTable = pgTable("doctors", {
  id: uuid("id").defaultRandom().primaryKey(),
  clinicId: uuid("clinic_id")
    .notNull()
    .references(() => clinicsTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  avatarImageUrl: text("avatar_image_url"),
  // 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday, 0 - Sunday
  availableFromWeekDay: integer("available_from_week_day").notNull(),
  availableToWeekDay: integer("available_to_week_day").notNull(),
  availableFromTime: time("available_from_time").notNull(),
  availableToTime: time("available_to_time").notNull(),
  specialty: text("specialty").notNull(),
  appointmentPriceInCents: integer("appointment_price_in_cents").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const doctorsTableRelations = relations(
  doctorsTable,
  ({ many, one }) => ({
    clinic: one(clinicsTable, {
      fields: [doctorsTable.clinicId],
      references: [clinicsTable.id],
    }),
    appointments: many(appointmentsTable),
  }),
);

export const patientSexEnum = pgEnum("patient_sex", ["male", "female"]);

export const patientsTable = pgTable("patients", {
  id: uuid("id").defaultRandom().primaryKey(),
  clinicId: uuid("clinic_id")
    .notNull()
    .references(() => clinicsTable.id, { onDelete: "cascade" }),
=======
export const usersToClinicsTableRelations = relations(usersToClinicsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [usersToClinicsTable.userId],
    references: [usersTable.id],
  }),
  clinic: one(clinicsTable, {
    fields: [usersToClinicsTable.clinicId],
    references: [clinicsTable.id],
  }),
}));

export const doctorsTable = pgTable("doctors", {
  id: uuid("id").defaultRandom().primaryKey(),
  clinicId: uuid("clinic_id").references(() => clinicsTable.id, { onDelete: "cascade" }).notNull(),
  name: text("name").notNull(),
  avatarImageUrl: text("avatar_image_url"),
  availableFromWeekDay: text("available_from_week_day").notNull(),
  availableToWeekDay: text("available_to_week_day").notNull(),
  availableFromTime: time("available_from_time").notNull(),
  availableToTime: time("available_to_time").notNull(),
  specialty: text("specialty").notNull(),
  appointmentPrice: integer("appointment_price_in_cents").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
});

export const doctorsTableRelations = relations(doctorsTable, ({ many, one }) => ({
  clinic: one(clinicsTable, {
    fields: [doctorsTable.clinicId],
    references: [clinicsTable.id],
  }),
  appointments: many(appointmentsTable),
}));
 
export const patientSexEnum = pgEnum("patient_sex", ["male", "female", "other"]);

export const patientsTable = pgTable("patients", {
  id: uuid("id").defaultRandom().primaryKey(),
  clinicId: uuid("clinic_id").references(() => clinicsTable.id, { onDelete: "cascade" }).notNull(),
>>>>>>> main
  name: text("name").notNull(),
  email: text("email").notNull(),
  phoneNumber: text("phone_number").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
<<<<<<< HEAD
  sex: patientSexEnum("sex").notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const patientsTableRelations = relations(
  patientsTable,
  ({ one, many }) => ({
    clinic: one(clinicsTable, {
      fields: [patientsTable.clinicId],
      references: [clinicsTable.id],
    }),
    appointments: many(appointmentsTable),
  }),
);
=======
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
});

export const patientsTableRelations = relations(patientsTable, ({ many, one }) => ({
  clinic: one(clinicsTable, {
    fields: [patientsTable.clinicId],
    references: [clinicsTable.id],
  }),
  appointments: many(appointmentsTable),
}));
>>>>>>> main

export const appointmentsTable = pgTable("appointments", {
  id: uuid("id").defaultRandom().primaryKey(),
  date: timestamp("date").notNull(),
<<<<<<< HEAD
  appointmentPriceInCents: integer("appointment_price_in_cents").notNull(),
  clinicId: uuid("clinic_id")
    .notNull()
    .references(() => clinicsTable.id, { onDelete: "cascade" }),
  patientId: uuid("patient_id")
    .notNull()
    .references(() => patientsTable.id, { onDelete: "cascade" }),
  doctorId: uuid("doctor_id")
    .notNull()
    .references(() => doctorsTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const appointmentsTableRelations = relations(
  appointmentsTable,
  ({ one }) => ({
    clinic: one(clinicsTable, {
      fields: [appointmentsTable.clinicId],
      references: [clinicsTable.id],
    }),
    patient: one(patientsTable, {
      fields: [appointmentsTable.patientId],
      references: [patientsTable.id],
    }),
    doctor: one(doctorsTable, {
      fields: [appointmentsTable.doctorId],
      references: [doctorsTable.id],
    }),
  }),
);
=======
  clinicId: uuid("clinic_id").references(() => clinicsTable.id, { onDelete: "cascade" }).notNull(),
  patientId: uuid("patient_id").references(() => patientsTable.id, { onDelete: "cascade" }).notNull(),  
  doctorId: uuid("doctor_id").references(() => doctorsTable.id, { onDelete: "cascade" }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
});

export const appointmentsTableRelations = relations(appointmentsTable, ({ one }) => ({
  clinic: one(clinicsTable, {
    fields: [appointmentsTable.clinicId],
    references: [clinicsTable.id],
  }),
  patient: one(patientsTable, {
    fields: [appointmentsTable.patientId],
    references: [patientsTable.id],
  }),
  doctor: one(doctorsTable, {
    fields: [appointmentsTable.doctorId],
    references: [doctorsTable.id],
  }),
}));
>>>>>>> main
