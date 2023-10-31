import { style } from "@vanilla-extract/css"
import { vars } from "../../../variables"

/* -------------------------------------------------------------------------------------------------
 * Menu Input Container styles
 * -----------------------------------------------------------------------------------------------*/

export const container = style({
  alignItems: "center",
  backgroundColor: vars.colors.white,
  border: `1px solid transparent`,
  borderRadius: vars.radii[2],
  boxShadow: `0px 2px 4px 0px rgba(0, 0, 0, 0.10)`,
  color: vars.colors.text,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: 50,
  outline: "none",
  width: "100%",
})

export const isFocused = style({
  border: `1px solid ${vars.colors.primary}`,
  outline: `1px solid ${vars.colors.primary}`,
})

export const isDisabled = style({
  opacity: 0.75,
})

/* -------------------------------------------------------------------------------------------------
 * Input styles
 * -----------------------------------------------------------------------------------------------*/

export const label = style({
  fontSize: 18,
  fontWeight: 300,
  height: 18,
  marginLeft: 16,
})

export const input = style({
  alignItems: "center",
  all: "unset",
  backgroundColor: "transparent",
  color: vars.colors.text,
  display: "block",
  fontSize: 18,
  fontFamily: vars.fontFamily.primary,
  fontWeight: 300,
  height: 50,
  outline: "none",
  padding: "0 16px",
  textAlign: "right",

  ":disabled": {
    color: vars.colors.grayScale.gray11,
  },
  ":focus": {
    color: vars.colors.primary,
  },
  "::placeholder": {
    color: vars.colors.grayScale.gray9,
  },
  selectors: {
    // these fix the issue with the date picker, particularly with safari
    "&[type=date]::-webkit-datetime-edit-text": {
      color: vars.colors.text,
    },
    "&[type=date]::-webkit-datetime-edit": {
      alignItems: "center",
      display: "flex",
      height: 42,
      justifyItems: "flex-start",
    },
    "&[type=date]::-webkit-date-and-time-value": {
      display: "flex",
      height: 42,
      alignItems: "center",
      textAlign: "left",
    },
    // change color of the calendar icon
    "&[type=date]::-webkit-calendar-picker-indicator": {
      alignSelf: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23212121" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>')`,
      display: "flex",
      justifySelf: "flex-end",
    },
  },
})

export const error = style({
  color: vars.colors.errorRed,
})

/* -------------------------------------------------------------------------------------------------
 * Icon styles
 * -----------------------------------------------------------------------------------------------*/

export const iconContainer = style({
  marginBottom: 10,
  marginTop: -32,
  pointerEvents: "none",
  width: "100%",
})

export const icon = style({
  cursor: "pointer",
  float: "right",
  marginRight: 10,
  pointerEvents: "auto",
  zIndex: 999,

  ":hover": {
    cursor: "pointer",
  },
})
