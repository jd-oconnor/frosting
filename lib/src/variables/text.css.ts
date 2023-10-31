import { globalFontFace, style } from "@vanilla-extract/css"

const primary = "Open Sans"
const secondary = "Montserrat"

/**
 * Creates a globally scoped custom font.
 * https://vanilla-extract.style/documentation/api/font-face/
 */
globalFontFace(primary, {
  src: "local('Open Sans')",
})

globalFontFace(secondary, {
  src: "local('Montserrat')",
})

export const font = style({
  fontFamily: `${primary}, ${secondary}, sans-serif`,
})
