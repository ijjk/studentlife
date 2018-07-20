import { usersService } from '../../../feathers/services'

// action methods
export const createUser = user => usersService.create(user)
