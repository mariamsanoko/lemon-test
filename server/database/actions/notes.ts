import { eq } from 'drizzle-orm'
import type { Note, InsertNote } from '../../../types/database'
import { useDB, tables } from '@@/server/utils/database'

export const createNote = async (payload: InsertNote) => {
  try {
    const record = await useDB()
      .insert(tables.notes)
      .values({ ...payload })
      .onConflictDoUpdate({
        target: tables.notes.id,
        set: payload,
      })
      .returning()
      .get()
    return record
  } catch (error) {
    console.error(error)
    throw new Error('Failed to create note')
  }
}

export const findNoteById = async (id: string) => {
  const [record] = await useDB()
    .select()
    .from(tables.notes)
    .where(eq(tables.notes.id, id))
  return record || null
}

export const updateNote = async (id: string, payload: Partial<InsertNote>) => {
  const record = await useDB()
    .update(tables.notes)
    .set(payload)
    .where(eq(tables.notes.id, id))
    .returning()
    .get()
  return record || null
}

export const deleteNote = async (id: string) => {
  const record = await useDB()
    .delete(tables.notes)
    .where(eq(tables.notes.id, id))
    .returning()
    .get()
  return record || null
}

export const findNotesByUserId = async (userId: string) => {
  const records = await useDB()
    .select()
    .from(tables.notes)
    .where(eq(tables.notes.userId, userId))
  return records || null
}
