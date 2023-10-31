import { style } from "@vanilla-extract/css"
import { vars } from "../../../variables"

/* -------------------------------------------------------------------------------------------------
 * Select Recipe
 * -----------------------------------------------------------------------------------------------*/

export const base = style({
  appearance: "none",
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.grayScale.gray8}`,
  borderRadius: vars.radii[3],
  boxSizing: "border-box",
  color: vars.colors.text,
  cursor: "pointer",
  display: "block",
  fontFamily: vars.fontFamily.secondary,
  fontSize: vars.fonts.body,
  fontWeight: 500,
  gap: 10,
  height: 42,
  outline: "none",
  padding: "10px 32px 10px 10px",
  width: "100%",

  ":disabled": {
    color: vars.colors.grayScale.gray11,
  },
  ":focus": {
    border: `1.5px solid ${vars.colors.text}`,
    boxShadow: `0 0 4px 3px ${vars.colors.opacity.purple}`,
  },
  ":focus-visible": {
    boxShadow: `0 0 4px 3px r${vars.colors.opacity.purple}`,
  },
})

export const container = style({
  display: "block",
  width: "100%",
})

export const chevronContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: 12,
  marginTop: -32,
  pointerEvents: "none",
  position: "relative",
  width: "100%",
  zIndex: 0,
})

export const chevron = style({
  marginRight: 10,
  zIndex: 0,
})

/* -------------------------------------------------------------------------------------------------
 * Select state styles
 * -----------------------------------------------------------------------------------------------*/

export const error = style({
  border: `1px solid ${vars.colors.errorRed} !important`,
  color: vars.colors.errorRed,

  ":focus": {
    border: `1px solid ${vars.colors.errorRed}  !important`,
    boxShadow: `0 0 4px 3px ${vars.colors.opacity.red}`,
    color: vars.colors.errorRed,
  },
})

export const disabled = style({
  color: vars.colors.grayScale.gray11,
})

export const placeholderSelected = style({
  color: vars.colors.grayScale.gray9,
})
