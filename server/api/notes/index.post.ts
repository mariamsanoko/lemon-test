
import { createNote } from '@@/server/database/actions/notes'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)
  const { title, content, image, icon } = await readValidatedBody(
    event,
    (body) =>
      z
        .object({
          title: z.string().min(1).max(256),
          content: z.string().min(1).max(5000),
          image: z.string().optional(),
          icon: z.string().optional(),
        })
        .parse(body),
  )
  const note = await createNote({
    title,
    content,
    image,
    icon,
    userId: user.id,
  })
  return note
})
