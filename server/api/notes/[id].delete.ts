import { deleteNote, findNoteById } from '@@/server/database/actions/notes'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)
  const noteId = getRouterParam(event, 'id')
  if (!noteId) {
    throw createError({ statusCode: 400, statusMessage: 'Note ID is required' })
  }

  const note = await findNoteById(noteId)
  if (!note || note.userId !== user.id) {
    throw createError({ statusCode: 404, message: 'Note not found' })
  }

  return deleteNote(noteId)
})
