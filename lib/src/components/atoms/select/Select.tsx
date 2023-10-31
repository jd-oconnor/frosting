import React from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import getChevronColor from "../../../utils/getChevronColor"
import Option from "../option"
import * as styles from "./Select.css"

type SelectOption = {
  label: string | number
  value: string | number
}

export type Row = Record<string, string | number> & SelectOption

export interface SelectProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  /**
   * The unique id for the select
   */
  id: string
  /**
   * An array of objects with required `label` and `value` keys that will be selected from by the user
   */
  options: Array<Row | string | number>
  /**
   * Error state of the select
   */
  error?: boolean
  /**
   * Disables user interaction with the element
   * @default false
   */
  disabled?: boolean
  /**
   * Optional placeholder
   * @default Select...
   */
  placeholder?: string
  /**
   * Whether the select input is a required field
   * @default false
   */
  required?: boolean
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      options,
      placeholder = "Select...",
      error = false,
      disabled = false,
      required = false,
      onFocus,
      onBlur,
      value,
      ...rest
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = React.useState<boolean>(false)

    const getOptionsList = () => {
      if (typeof options[0] === "object") {
        return options.map(
          (option) =>
            typeof option === "object" && (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ),
        )
      }

      if (typeof options[0] === "string" || typeof options[0] === "number") {
        return options.map(
          (option) =>
            (typeof option === "string" || typeof option === "number") && (
              <Option key={option} value={option}>
                {option}
              </Option>
            ),
        )
      }
    }

    return (
      <div className={styles.container}>
        <select
          ref={ref}
          id={id}
          aria-disabled={disabled}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          className={[
            styles.base,
            value === "" ? styles.placeholderSelected : "",
            error && !disabled ? styles.error : "",
            disabled ? styles.disabled : "",
          ]
            .join(" ")
            .trim()}
          onFocus={(event) => {
            onFocus && onFocus(event)
            setIsFocused(true)
          }}
          onBlur={(event) => {
            onBlur && onBlur(event)
            setIsFocused(false)
          }}
          {...rest}
        >
          <>
            <Option disabled value="" key="empty" defaultValue="">
              {placeholder}
            </Option>
            {options && getOptionsList()}
          </>
        </select>
        <div className={styles.chevronContainer}>
          {isFocused ? (
            <FiChevronUp
              className={styles.chevron}
              size={24}
              color={getChevronColor(disabled, error)}
              aria-hidden="true"
            />
          ) : (
            <FiChevronDown
              className={styles.chevron}
              size={24}
              color={getChevronColor(disabled, error)}
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    )
  },
)

export default Select
