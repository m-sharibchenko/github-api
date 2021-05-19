import { reposOnPage } from './constants'

export function getReposItems (allReposCount, activePg) {
  if (Math.ceil(allReposCount / reposOnPage) === activePg && allReposCount % reposOnPage !== 0) {
    const penultimatePg = activePg - 1
    const reposOnLastPg = allReposCount - (penultimatePg * reposOnPage)

    if (reposOnLastPg === 1) {
      return {from: allReposCount, to: ''}

    } else {
      const fromItem = allReposCount - reposOnLastPg + 1
      const toItem = allReposCount

      return {from: fromItem, to: toItem}
    }
  } else {
    const toItem = activePg * 4
    const fromItem = toItem - 3

    return {from:fromItem, to: toItem}
  }
}