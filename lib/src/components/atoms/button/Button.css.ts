import { keyframes } from "@vanilla-extract/css"
import { RecipeVariants, recipe } from "@vanilla-extract/recipes"
import { vars } from "../../../variables"

/* -------------------------------------------------------------------------------------------------
 * Button Recipe
 * -----------------------------------------------------------------------------------------------*/

export const button = recipe({
  base: {
    alignItems: "center",
    all: "unset",
    borderRadius: vars.radii[3],
    boxSizing: "border-box",
    display: "flex",
    fontFamily: vars.fontFamily.primary,
    fontWeight: 700,
    justifyContent: "center",
    padding: "16px 32px",
    width: "fit-content",

    ":focus-visible": { boxShadow: `0 0 0 5px ${vars.colors.opacity.purple} ` },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: vars.colors.primary,
        border: `1px solid ${vars.colors.primary}`,
        color: vars.colors.white,
        fontSize: vars.fonts.h6,

        ":hover": {
          opacity: 0.95,
          cursor: "pointer",
        },
        ":active": {
          backgroundColor: vars.colors.primaryScale.primary3,
        },
        ":disabled": {
          border: `1px solid ${vars.colors.grayScale.gray9}`,
          backgroundColor: vars.colors.grayScale.gray9,
          color: vars.colors.grayScale.gray5,
          cursor: "not-allowed",
        },
        ":focus-visible": {
          border: `1px solid ${vars.colors.primary}`,
          boxShadow: `0 0 4px 3px r${vars.colors.opacity.purple}`,
        },
      },

      secondary: {
        backgroundColor: "transparent",
        border: `1px solid ${vars.colors.primary}`,
        color: vars.colors.primary,
        fontSize: vars.fonts.h6,
        marginBottom: 16,

        ":hover": {
          border: `1px solid ${vars.colors.primary}`,
          boxShadow: `0 0 4px 3px r${vars.colors.opacity.purple}`,
          color: vars.colors.primary,
          cursor: "pointer",
        },
        ":active": {
          border: `1px solid ${vars.colors.primaryScale.primary3}`,
          backgroundColor: vars.colors.primaryScale.primary3,
          color: vars.colors.white,
        },
        ":disabled": {
          backgroundColor: vars.colors.grayScale.gray4,
          border: `1px solid ${vars.colors.grayScale.gray7}`,
          color: vars.colors.grayScale.gray9,
          cursor: "not-allowed",
        },
        ":focus-visible": {
          boxShadow: `0 0 4px 3px r${vars.colors.opacity.purple}`,
        },
      },

      text: {
        margin: 0,
        color: vars.colors.primary,
        fontSize: vars.fonts.body,
        fontWeight: 500,
        width: "fit-content",
        ":hover": {
          backgroundColor: vars.colors.grayScale.gray2,
          color: vars.colors.primary,
          cursor: "pointer",
        },
        ":active": {
          backgroundColor: vars.colors.grayScale.gray3,
          color: vars.colors.primaryScale.primary3,
        },
      },
    },
    fontSize: {
      small: {
        fontSize: vars.fonts.body2,
      },
      medium: {
        fontSize: vars.fonts.body,
      },
      large: {
        fontSize: vars.fonts.h6,
      },
    },
    width: {
      "fit-content": {
        width: "fit-content",
      },
      full: {
        width: "100%",
      },
    },
    borderRadius: {
      none: {
        borderRadius: 0,
      },
      small: {
        borderRadius: vars.radii[2],
      },
      medium: {
        borderRadius: vars.radii[3],
      },
      large: {
        borderRadius: vars.radii[5],
      },
      pill: {
        borderRadius: vars.radii[12],
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    borderRadius: "medium",
  },
})

export type ButtonVariants = RecipeVariants<typeof button>

/* -------------------------------------------------------------------------------------------------
 * Spinner Recipe
 * -----------------------------------------------------------------------------------------------*/

const rotate = keyframes({
  "100%": {
    transform: "rotate(360deg)",
  },
})

const clipFix = keyframes({
  "0%": {
    clipPath: "polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)",
  },
  "25%": {
    clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)",
  },
  "50%": {
    clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)",
  },
  "75%": {
    clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)",
  },
  "100%": {
    clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)",
  },
})

export const spinner = recipe({
  base: {
    animation: `${rotate} 1s linear infinite`,
    borderRadius: "50%",
    height: 20,
    marginRight: 16,
    position: "relative",
    width: 20,

    "::before": {
      animation: `${clipFix} 2s linear infinite`,
      border: `2px solid ${vars.colors.white}`,
      borderRadius: "50%",
      boxSizing: "border-box",
      content: "",
      inset: 0,
      position: "absolute",
    },
  },
  variants: {
    variant: {
      primary: {
        marginTop: 2,
      },
      secondary: {
        marginTop: 2,

        "::before": {
          border: `2px solid ${vars.colors.primary}`,
        },
      },
      destructive: {
        marginTop: 2,
      },
      text: {
        height: 18,
        marginTop: 2,
        width: 18,

        "::before": {
          border: `2px solid ${vars.colors.primary}`,
        },
      },
    },
    fontSize: {
      small: {
        height: 18,
        width: 18,
      },
      medium: {
        height: 20,
        width: 20,
      },
      large: {
        height: 22,
        width: 22,
      },
    },
  },
})
