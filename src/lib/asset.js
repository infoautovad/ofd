export function asset(path) {
  if (!path) return ''
  if (/^(?:[a-z]+:)?\/\//i.test(path)) return path
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${String(path).replace(/^\/+/, '')}`
}
