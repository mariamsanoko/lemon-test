import { tables } from '@@/server/utils/database'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'

export type User = typeof tables.users.$inferSelect
export type InsertUser = typeof tables.users.$inferInsert

export type Note = typeof tables.notes.$inferSelect
export type InsertNote = typeof tables.notes.$inferInsert

// Zod schemas
export const insertUserSchema = createInsertSchema(tables.users)
export const selectUserSchema = createSelectSchema(tables.users)

export const insertNoteSchema = createInsertSchema(tables.notes)
export const selectNoteSchema = createSelectSchema(tables.notes)
