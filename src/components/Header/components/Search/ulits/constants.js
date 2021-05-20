export const reposPerPage = 100

export const pagesForFetch = (repos) => {
  return Math.ceil(repos / reposPerPage)
}