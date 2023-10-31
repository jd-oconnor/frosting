import { vars } from "../variables"

/**
 * Throughout several components we add optional padding to the top and bottom of the component,
 * as well as all sides. Since we repeat this pattern, we can create a this shared object to use
 * whenever we create a recipe that needs to accept these variants.
 */
const paddingRecipeVariants = {
  paddingY: {
    sm: {
      paddingBottom: vars.space.sm,
      paddingTop: vars.space.sm,
    },
    md: {
      paddingBottom: vars.space.md,
      paddingTop: vars.space.md,
    },
    lg: {
      paddingBottom: vars.space.lg,
      paddingTop: vars.space.lg,
    },
    xl: {
      paddingBottom: vars.space.xl,
      paddingTop: vars.space.xl,
    },
  },
  paddingX: {
    sm: {
      paddingLeft: vars.space.sm,
      paddingRight: vars.space.sm,
    },
    md: {
      paddingLeft: vars.space.md,
      paddingRight: vars.space.md,
    },
    lg: {
      paddingLeft: vars.space.lg,
      paddingRight: vars.space.lg,
    },
    xl: {
      paddingLeft: vars.space.xl,
      paddingRight: vars.space.xl,
    },
  },
  padding: {
    sm: {
      padding: vars.space.sm,
    },
    md: {
      padding: vars.space.md,
    },
    lg: {
      padding: vars.space.lg,
    },
    xl: {
      padding: vars.space.xl,
    },
  },
}

export default paddingRecipeVariants
