import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { marginRecipeVariants, paddingRecipeVariants } from "../../../shared"
import { vars } from "../../../variables"

/* -------------------------------------------------------------------------------------------------
 * Card styles
 * -----------------------------------------------------------------------------------------------*/

export const container = recipe({
  base: {
    appearance: "none",
    backgroundColor: vars.colors.white,
    border: `1px solid ${vars.colors.grayScale.gray5}`,
    borderRadius: vars.radii[5],
    boxShadow: `0 2px 6px 0 ${vars.colors.opacity.black}`,
    boxSizing: "border-box",
    flexShrink: 0,
    marginLeft: "auto",
    marginRight: "auto",
    pointerEvents: "auto",
    position: "relative",
    textAlign: "inherit",
    textDecoration: "none",
    verticalAlign: "middle",
    wordWrap: "break-word",
  },

  variants: {
    ...marginRecipeVariants,
    ...paddingRecipeVariants,
  },

  defaultVariants: {},
})

export type ContainerVariants = RecipeVariants<typeof container>
