/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onClientEntry = async () => {
  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
  }
}
