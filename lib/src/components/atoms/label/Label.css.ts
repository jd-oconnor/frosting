import { style } from "@vanilla-extract/css"
import { vars } from "../../../variables"

export const label = style({
  color: vars.colors.grayScale.gray11,
  fontFamily: vars.fontFamily.primary,
  fontSize: vars.fonts.label,
  fontWeight: 500,
  marginBottom: vars.space.sm,

  ":invalid": {
    color: vars.colors.errorRed,
  },
})

export const error = style({
  color: vars.colors.errorRed,
})

export const disabled = style({
  color: vars.colors.grayScale.gray9,
})

export const selectable = style({
  ":hover": {
    cursor: "pointer",
  },
})
