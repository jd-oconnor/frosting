import React from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"
import type { InputType, PasswordToggle } from "../../../types"
import { vars } from "../../../variables"
import Label from "../label"
import * as styles from "./MenuInput.css"

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Whether the form control is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * The optional error state of the input. This is used for validation.
   * @default false
   */
  error?: boolean
  /**
   * Name of the form control. Submitted with the form as part of a name/value pair.
   */
  name: string
  /**
   * Label text that appears to the left on the menu input.
   */
  label: string
  /**
   * Text that appears in the form control when it has no value set.
   */
  placeholder?: string
  /**
   * Indicates that the user must fill in a value before submitting a form.
   */
  required?: boolean
  /**
   * How the input works and appears.
   * @default text
   */
  type?: InputType
  /**
   * The initial value of the input.
   */
  value?: string | number
  /**
   * The minimum value for the input when input type is number.
   */
  min?: number
  /**
   * The maximum value for the input when input type is number.
   */
  max?: number
}

const MenuInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      disabled = false,
      error,
      name,
      label,
      placeholder,
      required,
      type = "text",
      value,
      min,
      max,
      ...props
    },
    ref,
  ) => {
    let inputRef: HTMLInputElement | null = null
    const [isFocused, setIsFocused] = React.useState(false)

    const [passwordTypeToggle, setPasswordTypeToggle] =
      React.useState<PasswordToggle>("password")

    const handleToggleShowHidePassword = () => {
      setPasswordTypeToggle((prevState: PasswordToggle) =>
        prevState === "password" ? "text" : "password",
      )
    }

    const numberA11yProps = {
      "aria-valuemin": min,
      "aria-valuemax": max,
      "aria-valuenow": Number(value),
    }

    const a11yProps = {
      "aria-invalid": error,
      "aria-disabled": disabled,
      role: type === "number" ? "spinbutton" : "textbox",
    }

    return (
      <div
        ref={ref}
        className={[
          styles.container,
          isFocused && styles.isFocused,
          disabled && styles.isDisabled,
        ].join(" ")}
        onClick={() => {
          if (inputRef) inputRef.focus()
        }}
      >
        <Label
          htmlFor={name}
          className={styles.label}
          required={required}
          disabled={disabled}
        >
          {label}
        </Label>
        <input
          id={name}
          ref={(el) => (inputRef = el!)}
          {...props}
          className={[styles.input, error ? styles.error : ""].join(" ").trim()}
          {...a11yProps}
          {...(type === "number" && numberA11yProps)}
          disabled={disabled}
          name={name}
          placeholder={placeholder}
          required={required}
          type={type === "password" ? passwordTypeToggle : type}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {type === "password" && (
          <span className={styles.iconContainer}>
            {passwordTypeToggle === "password" ? (
              <FiEye
                size={24}
                className={styles.icon}
                color={vars.colors.grayScale.gray11}
                onClick={handleToggleShowHidePassword}
              />
            ) : (
              <FiEyeOff
                size={24}
                className={styles.icon}
                color={vars.colors.grayScale.gray11}
                onClick={handleToggleShowHidePassword}
              />
            )}
          </span>
        )}
      </div>
    )
  },
)

export default MenuInput
