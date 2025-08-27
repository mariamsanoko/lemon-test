import { findNotesByUserId } from '@@/server/database/actions/notes'

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)
  const notes = await findNotesByUserId(user.id)
  return notes
})
