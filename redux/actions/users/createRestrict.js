import { restrictsService } from '../../../feathers/services'

// action methods
export const createRestrict = restricts => restrictsService.create(restricts)
