import {
  findUserByEmail,
  createUser,
  updateUser,
} from '@@/server/database/actions/users'

export interface OAuthUserData {
  email: string
  name: string
  avatarUrl: string
  provider: 'discord' | 'google' | 'github'
  providerUserId: string
}

export const handleOAuthSuccess = async (
  event: any,
  oauthUser: OAuthUserData,
) => {
  // 2. Check if user exists
  let dbUser = await findUserByEmail(oauthUser.email)

  // 3. If new user, create user with OAuth data
  if (!dbUser) {
    dbUser = await createUser({
      email: oauthUser.email,
      name: oauthUser.name,
      avatarUrl: oauthUser.avatarUrl,
    })
  }

  // 4. Update avatar if not set
  if (!dbUser.avatarUrl && oauthUser.avatarUrl) {
    dbUser = await updateUser(dbUser.id, {
      avatarUrl: oauthUser.avatarUrl,
    })
  }

  // 8. Set user session and redirect to dashboard
  await setUserSession(event, { user: dbUser })
  return sendRedirect(event, '/dashboard')
}
