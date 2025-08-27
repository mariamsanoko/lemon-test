import { updateUser } from '@@/server/database/actions/users'
import { insertUserSchema } from '@@/types/database'
const updateUserSchema = insertUserSchema.partial()

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event)
  const { name, avatarUrl } = await readValidatedBody(event, (body) =>
    updateUserSchema.parse(body),
  )
  const updatedUser = await updateUser(user.id, { name, avatarUrl })
  return updatedUser
})
