
const slugify = require('slugify')

export const slugifyToLower = (s:string) => {
  return slugify(s, {
    lower: true
  })
}
