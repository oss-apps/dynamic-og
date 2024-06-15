export const serialize = (obj: { [x: string]: any }) => (Object.entries(obj).map(i => [i[0], encodeURIComponent(i[1])].join('=')).join('&'))

export const getTemplate = (obj: { [x: string]: any }) => (Object.entries(obj).map(i => [i[0], i[0] == 'dark' ? 'false' : `{${i[0].toUpperCase()}}`].join('=')).join('&'))

export const routes = {
  docs: 'og/docs/img',
  blog: 'og/blog/img',
  action: 'og/action/img',
  profile: 'og/profile/img',
  simple: 'og/simple/img'
}
