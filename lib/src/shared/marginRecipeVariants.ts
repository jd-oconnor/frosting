import { vars } from "../variables"

/**
 * Throughout several components we add optional margin to the top and bottom of the component,
 * as well as all sides. Since we repeat this pattern, we can create a this shared object to use
 * whenever we create a recipe that needs to accept these variants.
 */
const marginRecipeVariants = {
  marginY: {
    sm: {
      marginBottom: vars.space.sm,
      marginTop: vars.space.sm,
    },
    md: {
      marginBottom: vars.space.md,
      marginTop: vars.space.md,
    },
    lg: {
      marginBottom: vars.space.lg,
      marginTop: vars.space.lg,
    },
    xl: {
      marginBottom: vars.space.xl,
      marginTop: vars.space.xl,
    },
  },
  marginX: {
    sm: {
      marginLeft: vars.space.sm,
      marginRight: vars.space.sm,
    },
    md: {
      marginLeft: vars.space.md,
      marginRight: vars.space.md,
    },
    lg: {
      marginLeft: vars.space.lg,
      marginRight: vars.space.lg,
    },
    xl: {
      marginLeft: vars.space.xl,
      marginRight: vars.space.xl,
    },
  },
  margin: {
    sm: {
      margin: vars.space.sm,
    },
    md: {
      margin: vars.space.md,
    },
    lg: {
      margin: vars.space.lg,
    },
    xl: {
      margin: vars.space.xl,
    },
  },
}

export default marginRecipeVariants
