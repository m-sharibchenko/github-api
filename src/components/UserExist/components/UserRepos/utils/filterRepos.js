export function filterRepos ({ from, to }, repos) {
  const fromItem = from - 1
  const toItem = to - 1

  if (to === '') {
    return repos.filter((item, index) => index === fromItem)
  }
  return repos.filter((item, index) => index >= fromItem && index <= toItem)
}