import React, { ButtonHTMLAttributes } from "react"
import { BorderRadiusVariants, ButtonVariants } from "../../../types"
import { button, spinner } from "./Button.css"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The type of button and it's styling to render
   * @default primary
   */
  variant?: ButtonVariants
  /**
   * The fontSize of text in the button
   * @default large
   */
  fontSize?: "small" | "medium" | "large"
  /**
   * The width of the button
   * @default large
   */
  width?: "fit-content" | "full"
  /**
   * Border radius variant of the button
   */
  borderRadius?: BorderRadiusVariants
  /**
   * Whether or not the button is disabled
   * @default false
   */
  disabled?: boolean
  /**
   * An optional boolean to render a loading spinner
   * @default false
   */
  loading?: boolean
  /**
   * The onClick handler for the button.
   * If the button is disabled or loading, the onClick will not fire
   * @returns void
   */
  onClick?: () => void
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  variant,
  borderRadius,
  fontSize,
  width,
  loading = false,
  onClick,
  ...rest
}) => {
  const ariaLabel =
    typeof children === "string" ? children : rest["aria-labelledby"]

  return (
    <button
      type="button"
      disabled={disabled}
      aria-disabled={disabled}
      aria-labelledby={ariaLabel}
      className={[
        button({
          variant,
          fontSize,
          width,
          borderRadius,
        }),
      ].join(" ")}
      onClick={() => {
        if (disabled || loading) return
        onClick && onClick()
      }}
      {...rest}
    >
      {loading && (
        <span className={[spinner({ variant, fontSize })].join(" ")} />
      )}
      {children}
    </button>
  )
}

Button.displayName = "Button"

export default Button
