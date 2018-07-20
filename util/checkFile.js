import { allowedExts, maxFileSize } from './config'

const { images, other } = allowedExts
const prettyFileSize = Math.floor(maxFileSize / (1000 * 1000)) + 'MB'

const getError = error => ({ error })

const invalidType = imageOnly => {
  const allowed = imageOnly ? images : images.concat(other)
  return getError(
    `File type is invalid. Allowed types are ${allowed.join(', ')}.`
  )
}

const checkFile = ({ file, customExtension, imageOnly, previewCb }) => {
  const { name, size } = file

  if (size > maxFileSize) {
    return getError(`File exceeds max file size of ${prettyFileSize}`)
  }
  if (name.indexOf('.') < 0) {
    return getError(
      `File name does not contain a file extension (e.g. .jpg, .png)`
    )
  }
  const extension = name
    .split('.')
    .pop()
    .toLowerCase()

  if (customExtension) {
    return getError(
      extension === customExtension
        ? null
        : `File type is invalid. Expected .${customExtension}`
    )
  }
  const isImage = images.indexOf(extension) > -1

  if ((!isImage && imageOnly) || (!isImage && other.indexOf(extension) < 0)) {
    return invalidType(imageOnly)
  }

  if (isImage && typeof previewCb === 'function') {
    const reader = new FileReader()

    reader.onload = e => {
      previewCb(e.target.result)
    }
    reader.readAsDataURL(file)
  }
  return { error: null }
}

export default checkFile
