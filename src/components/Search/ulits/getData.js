export function getData (obj) {
  const {
    login,
    name,
    url,
    avatar_url,
    followers,
    following,
    html_url,
    public_repos
  } = obj

  return {
    login,
    name,
    url,
    avatar_url,
    followers,
    following,
    html_url,
    public_repos
  }
}