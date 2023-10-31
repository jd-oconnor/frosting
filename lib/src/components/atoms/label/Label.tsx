import React from "react"
import * as styles from "./Label.css"

export interface LabelProps extends React.ComponentProps<"label"> {
  /**
   * The form element the label is bound to
   */
  htmlFor: string
  /**
   * Error state of the html element it is bound to, also altering the label color
   * @default false
   */
  error?: boolean
  /**
   * Disabled state to alter the color of the label
   * @default false
   */
  disabled?: boolean
  /**
   * If true, there will be an asterisk, indicating that it is a required field.
   * Else, it is false and will not render the asterisk.
   * @default false
   */
  required?: boolean
  /**
   * When label is attached to another element such as a radio button or checkbox, it can accept and forward the click event.
   * If true, cursor will be pointer on hover, else it will not add styling to change the cursor on hover.
   */
  selectable?: boolean
  children?: React.ReactNode
}

const Label: React.FC<LabelProps> = ({
  htmlFor,
  error,
  disabled,
  required,
  children,
  selectable,
  ...rest
}) => (
  <label
    htmlFor={htmlFor}
    aria-disabled={disabled}
    aria-required={required}
    aria-invalid={error}
    className={[
      styles.label,
      selectable && styles.selectable,
      disabled && styles.disabled,
      error && styles.error,
    ].join(" ")}
    {...rest}
  >
    {children}
    {required && (
      <span className={disabled ? styles.disabled : styles.error}> *</span>
    )}
  </label>
)

export default Label
