// convert string sort to query $sort object
const getSort = sort => {
  if (sort.indexOf(':') < 0) return null
  sort = sort.split(':')
  return { [sort[0]]: sort[1] }
}

export default getSort
