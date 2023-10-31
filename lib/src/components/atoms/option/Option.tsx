import React from "react"
import * as styles from "./Option.css"

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}

const Option: React.FC<OptionProps> = ({ children, ...rest }) => (
  <option
    className={[styles.option, rest.disabled && styles.disabled].join(" ")}
    role="option"
    {...rest}
  >
    {children}
  </option>
)

Option.displayName = "Option"

export default Option
