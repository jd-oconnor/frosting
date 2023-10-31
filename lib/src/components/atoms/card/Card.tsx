import React from "react"
import { MarginProps, PaddingProps } from "../../../types"
import * as styles from "./Card.css"

interface Props
  extends React.HTMLAttributes<HTMLDivElement>,
    MarginProps,
    PaddingProps {
  children: React.ReactNode
}

const Card: React.FC<Props> = ({
  children,
  marginY,
  marginX,
  margin,
  paddingX,
  paddingY,
  padding,
  ...rest
}) => {
  return (
    <>
      <div
        className={styles.container({
          marginY,
          marginX,
          margin,
          paddingX,
          paddingY,
          padding,
        })}
        {...rest}
      >
        {children}
      </div>
    </>
  )
}

Card.displayName = "Card"

export default Card
