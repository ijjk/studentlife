import { maxResults } from './config'

const getBatch = (ids, store) => {
  const batch = []
  while (ids.length > 0 && batch.length < maxResults) {
    const id = ids.pop()
    if (!store[id]) batch.push(id)
  }
  return batch
}

export default getBatch
