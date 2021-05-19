export function filterUserInfo (obj) {
  const {
    login,
    name,
    avatar_url,
    followers,
    following,
    html_url,
    public_repos
  } = obj

  return {
    login,
    name,
    avatar_url,
    followers,
    following,
    html_url,
    public_repos
  }
}

export function filterReposInfo (arr) {
  return arr.map(({ id, name, html_url, description }) => {
    return {
      id,
      name,
      html_url,
      description
    }
  })
}