import MarginVariants from "./marginVariants"
interface MarginProps {
  /**
   * Margin applied vertically
   * @default undefined
   */
  marginY?: MarginVariants
  /**
   * Margin applied horizontally
   * @default undefined
   */
  marginX?: MarginVariants
  /**
   * Margin applied to all sides
   * @default undefined
   */
  margin?: MarginVariants
}

export default MarginProps
