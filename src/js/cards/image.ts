import placeholderImageSrc from '../utils/placeholder-image-src'
import { CardData } from '../models/card-node'

interface ImagePayload {
  src?: string
}

export default {
  name: 'image',
  type: 'dom',

  render({ payload }: { payload: ImagePayload }) {
    let img = document.createElement('img')
    img.src = payload.src || placeholderImageSrc
    return img
  },
} as CardData
