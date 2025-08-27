import { nanoid } from 'nanoid'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { users } from './users'

export const notes = sqliteTable('notes', {
  id: text('id')
    .primaryKey()
    .$default(() => nanoid()),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  content: text('content').notNull(),
  image: text('image'),
  icon: text('icon'),
  published: integer('published', { mode: 'boolean' }).notNull().default(false),
  createdAt: integer('created_at', { mode: 'timestamp' }).$default(
    () => new Date(),
  ),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(
    () => new Date(),
  ),
})
