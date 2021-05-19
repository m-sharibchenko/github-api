import { reposOnPage } from './constants'

export function findPageCount (reposCount) {
  return Math.ceil(reposCount / reposOnPage)
}