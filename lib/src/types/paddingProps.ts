import SpacingVariants from "./marginVariants"

interface PaddingProps {
  /**
   * Padding applied vertically
   * @default undefined
   */
  paddingY?: SpacingVariants
  /**
   * Padding applied horizontally
   * @default undefined
   */
  paddingX?: SpacingVariants
  /**
   * Padding applied to all sides
   * @default undefined
   */
  padding?: SpacingVariants
}

export default PaddingProps
