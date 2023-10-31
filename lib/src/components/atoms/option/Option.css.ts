import { style } from "@vanilla-extract/css"
import { vars } from "../../../variables"

/* -------------------------------------------------------------------------------------------------
 * Option styles
 * -----------------------------------------------------------------------------------------------*/

export const option = style({
  color: vars.colors.primary,
  fontFamily: vars.fontFamily.secondary,

  ":disabled": {
    color: vars.colors.grayScale.gray9,
  },
})

export const disabled = style({
  color: vars.colors.grayScale.gray9,
})
