import React from "react"
import {
  rainbowSprinkles,
  Sprinkles,
} from "../../../variables/rainbowSprinkles.css"

interface Props extends Sprinkles, React.HTMLAttributes<ARIAMixin> {
  children?: React.ReactNode
}

const Box: React.FC<Props> = ({ children, ...rest }) => {
  const { className, style, otherProps } = rainbowSprinkles(rest)

  return (
    <div className={className} style={style} {...otherProps}>
      {children}
    </div>
  )
}

export default Box
