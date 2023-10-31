import { createRainbowSprinkles, defineProperties } from "rainbow-sprinkles"
import { rainbowColors } from "./colors"
import { media } from "./media"
import { vars } from "./vars.css"

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": media.tablet },
    desktop: { "@media": media.desktop },
  },
  defaultCondition: "mobile",
  dynamicProperties: {
    all: true,
    appearance: true,
    alignItems: true,
    backgroundColor: rainbowColors,
    border: true,
    borderRadius: true,
    boxSizing: { borderBox: "border-box", contentBox: "content-box" },
    bottom: vars.space,
    display: true,
    flexDirection: true,
    flexGrow: true,
    flexShrink: true,
    flexWrap: true,
    float: true,
    fontFamily: vars.fontFamily,
    fontSize: vars.fonts,
    gap: vars.gap,
    height: true,
    justifyContent: true,
    left: vars.space,
    lineHeight: true,
    margin: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    marginTop: vars.space,
    maxHeight: true,
    maxWidth: true,
    minHeight: true,
    minWidth: true,
    padding: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    position: true,
    right: vars.space,
    textAlign: true,
    top: vars.space,
    verticalAlign: true,
    width: true,
    zIndex: true,
  },
  staticProperties: {
    display: ["block", "flex", "inline-block", "inline-flex", "none"],
  },
  shorthands: {
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    placeItems: ["alignItems", "justifyContent"],
    size: ["height", "width"],
  },
})

export const rainbowSprinkles = createRainbowSprinkles(responsiveProperties)

export type Sprinkles = Parameters<typeof rainbowSprinkles>[0]
