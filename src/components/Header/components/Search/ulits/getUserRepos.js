import { filterReposInfo } from './filterData'
import { pagesForFetch, reposPerPage } from './constants'

async function fetchRepos (user, page, reposPerPage) {
  try {
    const response = await fetch(`https://api.github.com/users/${user}/repos?per_page=${reposPerPage}&page=${page}`)

    return await response.json()

  } catch (error) {
    return 'error'
  }
}

export async function getUserRepos (user, repos) {
  const arr = []

  for (let i = 1; i <= pagesForFetch(repos); i++) {
    arr.push(fetchRepos(user, i, reposPerPage))
  }

  try {
    const response = await Promise.all(arr)
    const repos = response.flat()

    return { repos: filterReposInfo(repos) }

  } catch (error) {
    return { repos: 'error' }
  }
}

