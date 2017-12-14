import on from 'dom-event'
import Layzr from 'layzr.js'

// Check if object fit is supported
let objectFit = false
for (let prop in document.documentElement.style) {
  if (/object(?:-f|F)it$/.test(prop)) {
    objectFit = true
    break
  }
}

// Setup LazyLoad
const instance = Layzr({
  normal: 'data-normal',
  retina: 'data-retina',
  srcset: 'data-srcset',
  threshold: 0
})

instance
  .on('src:before', image => {
    on(image, 'load', (event) => {
      let wrapper = image.parentNode
      wrapper.classList.add('is-loaded')
    })
  })

const objectFitShim = () => {

  // Setup variables for object-fit
  const fitClass = 'media-fit'
  const fallbackClass = fitClass + '--fallback'
  const mediaClass = el.getAttribute('data-item-class')
  const elAspect = el.clientHeight / el.clientWidth
  const elMediaItems = el.getElementsByClassName(mediaClass) // querySelectorAll('img,video') to get rid of the data-item-class?

  // Grab each media-item and adjust its class-names
  for (var i = 0; i < elMediaItems.length; i++) {
    const mediaItem = elMediaItems[i]
    const mediaAspect = mediaItem.clientHeight / mediaItem.clientWidth

    mediaItem.className = mediaItem.className.replace(fitClass, fallbackClass)

    setTimeout(() => { // TODO: how to handle transforms
      mediaItem.classList.add('animated')
    }, 10)

    // Establish which edge of the mdia will hit container last (horizontal or vertical)
    if (mediaAspect < elAspect) {
      mediaItem.style.maxWidth = '100%'
    }
    if (mediaAspect >= elAspect) {
      mediaItem.style.maxHeight = '100%'
    }
  }

}
export default (el) => {
  instance
    .update()
    .check()
    .handlers(true)

  if (objectFit) {
    console.log('object fit works, don\'t shim!')
    return
  }

  objectFitShim
}


  ///////////////
 // TEMPORARY //
///////////////
// Original function copied in from another project, for reference
// Remove everything below this line, eventually

// FUNCTION //

// object fit shim
// let objectFit = false
// for (let prop in document.documentElement.style) {
//   if (/object(?:-f|F)it$/.test(prop)) {
//     objectFit = true
//     break
//   }
// }

// export default (el) => {
//   if (objectFit) {
//     return
//   }

//   const fitClass = 'media-fit'
//   const fallbackClass = fitClass + '--fallback'
//   const mediaClass = el.getAttribute('data-item-class')
//   const elAspect = el.clientHeight / el.clientWidth
//   const elMediaItems = el.getElementsByClassName(mediaClass)

//   for (var i = 0; i < elMediaItems.length; i++) {
//     const mediaItem = elMediaItems[i]
//     const mediaAspect = mediaItem.clientHeight / mediaItem.clientWidth

//     mediaItem.className = mediaItem.className.replace(fitClass, fallbackClass)

//     setTimeout(() => { // TODO: how to handle transforms
//       mediaItem.classList.add('animated')
//     }, 10)

//     if (mediaAspect < elAspect) {
//       mediaItem.style.maxWidth = '100%'
//     }
//     if (mediaAspect >= elAspect) {
//       mediaItem.style.maxHeight = '100%'
//     }
//   }
// }
