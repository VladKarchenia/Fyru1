import { saveState } from '../utils'

export const permanentSave = store => next => action => {
  const result = next(action)
  saveState(store.getState())
  return result
}
