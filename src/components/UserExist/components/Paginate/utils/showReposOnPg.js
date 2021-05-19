export function showReposOnPg ({from, to}, reposCount) {
  if (to === '') {
    return `${from} of ${reposCount}`
  } else {
    return `${from}-${to} of ${reposCount}`
  }
}