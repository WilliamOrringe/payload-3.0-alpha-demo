import type { AccessArgs } from 'payload/config'

import type { User } from '../../payload-types'

type isAdmin = (args: AccessArgs<unknown, User>) => boolean

export const admins: isAdmin = ({ req: { user } }) => {
  if (user) {
    if (
      ['admin'].some((role) => {
        return user?.roles?.some((individualRole: string) => {
          return individualRole === role
        })
      })
    )
      return true
  }

  return false
}
