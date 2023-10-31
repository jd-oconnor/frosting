import { vars } from "../variables"

const getChevronColor = (disabled: boolean = false, error: boolean = false) => {
  if (disabled) return vars.colors.grayScale.gray7
  if (error) return vars.colors.errorRed

  return vars.colors.text
}

export default getChevronColor
