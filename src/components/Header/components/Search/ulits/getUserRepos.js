import { filterReposInfo } from './filterData'

export async function getUserRepos (input) {
  try {
    const response = await fetch(`https://api.github.com/users/${input}/repos`)

    if (!response.ok) {
      return {repos: 'not found'}

    } else {
      const repos = await response.json()

      return {repos: filterReposInfo(repos)}
    }

  } catch (error) {
    return {repos: 'error'}
  }
}

