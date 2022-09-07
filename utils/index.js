export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  }

export const isActiveLink = (href, currentPathname) => {
    if (href === '/') {
        return href === currentPathname
    }

    return currentPathname.startsWith(href)
}