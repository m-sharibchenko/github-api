import { filterUserInfo } from './filterData'

export async function getUserData (input) {
  try {
    const response = await fetch(`https://api.github.com/users/${input}`)

    if (!response.ok) {
      return { login: 'not found' }
    }

    const data = await response.json()

    return filterUserInfo(data)

  } catch (error) {
    return { login: 'not found' }
  }
}