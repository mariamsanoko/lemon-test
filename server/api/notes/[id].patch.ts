import { updateNote, findNoteById } from '@@/server/database/actions/notes'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)
  const noteId = getRouterParam(event, 'id')
  if (!noteId) {
    throw createError({ statusCode: 400, statusMessage: 'Note ID is required' })
  }
  const { title, content, image, icon, userId } = await readValidatedBody(
    event,
    (body) =>
      z
        .object({
          title: z.string().min(1).max(256),
          content: z.string().min(1).max(5000),
          image: z.string().optional(),
          icon: z.string().optional(),
          userId: z.string().optional(),
        })
        .parse(body),
  )

  const note = await findNoteById(noteId)
  if (!note || note.userId !== user.id) {
    throw createError({ statusCode: 404, message: 'Note not found' })
  }
  return updateNote(noteId, { title, content, image, icon, userId: user.id })
})
