import { filterUserInfo } from './filterData'

export async function getUserData (input) {
  try {
    const response = await fetch(`https://api.github.com/users/${input}`)

    if (!response.ok) {
      return {user: 'not found'}

    } else {
      const data = await response.json()

      return {user: filterUserInfo(data)}
    }

  } catch (error) {
    return {user: 'error'}
  }
}