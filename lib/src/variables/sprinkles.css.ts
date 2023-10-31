import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles"
import { media } from "./media"
import { vars } from "./vars.css"

/**
 * Defines a collection of utility classes with properties, conditions and shorthands.
 * https://vanilla-extract.style/documentation/packages/sprinkles/
 */
const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": media.tablet },
    desktop: { "@media": media.desktop },
  },
  defaultCondition: "mobile",
  properties: {
    boxSizing: ["border-box", "content-box"],
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    padding: [0, "1rem 3.2rem 0 0"],
    borderBottom: [`1px solid ${vars.colors.grayScale.gray7}`, "none"],
    width: [0, "100%", "100vw"],
    height: ["auto"],
    textAlign: ["left", "center", "right", "justify"],
    marginTop: [0, "1rem", "3.2rem", "4rem", "-4rem"],
    fontSize: vars.fonts,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
  },
})

export const sprinkles = createSprinkles(responsiveProperties)

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0]
