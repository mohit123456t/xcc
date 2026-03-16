export function getDashboardPageTitle(
  pathname,
  basePath = '/dashboard',
  pages = [], // Will import from pages.js where needed
) {
  const normalizedPath =
    pathname === basePath ? '' : pathname.replace(`${basePath}/`, '')

  return (
    pages.find((page) => {
      if (page.path === normalizedPath) {
        return true
      }

      return page.path.includes('/:')
        ? normalizedPath.startsWith(page.path.split('/:')[0])
        : false
    })?.title ?? pages[0]?.title ?? 'Dashboard'
  )
}

