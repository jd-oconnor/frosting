import { createGlobalTheme } from "@vanilla-extract/css"
import { colors } from "./colors"
import { fonts } from "./fonts"
import { gap } from "./gap"
import { radii } from "./radii"
import { space } from "./space"

/**
 * Creates a theme attached to a global selector (:root), but with locally scoped variable names.
 * https://vanilla-extract.style/documentation/global-api/create-global-theme/
 */
export const vars = createGlobalTheme(":root", {
  colors,
  fonts,
  space,
  gap,
  radii,
  fontFamily: {
    primary: "Open Sans, Montserrat, sans-serif",
    secondary: "Montserrat, Open Sans, sans-serif",
  },
})
