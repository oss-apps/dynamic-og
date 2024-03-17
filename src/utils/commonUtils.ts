export const serialize = (obj: { [x: string]: any }) => (Object.entries(obj).map(i => [i[0], encodeURIComponent(i[1])].join('=')).join('&'))
export const routes = {
  docs: 'og/docs',
  blog: 'og/blog'
}
