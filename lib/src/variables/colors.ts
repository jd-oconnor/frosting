export const baseColors = {
  primary: "#5753c6",
  secondary: "#9A5DC7",
  tertiary: "#4A88C7",
  blue: "#1f9aff",
  text: "#010101",
  green: "#2D842A",
  white: "#ffffff",
  offWhite: "#f9f9f9",
  navLink: "#4c4a60",
  background: "#e6ddd6",
  errorRed: "#ed4337",
  darkRed: "#802000",
}

export const grayScale = {
  gray1: "#fcfcfc",
  gray2: "#f1f1f1",
  gray3: "#e1e1e1",
  gray4: "#d1d1d1",
  gray5: "#c1c1c1",
  gray6: "#b1b1b1",
  gray7: "#a1a1a1",
  gray8: "#918983",
  gray9: "#7f7f7f",
  gray10: "#6e6e6e",
  gray11: "#5e5e5e",
  gray12: "#4d4d4d",
}

export const primaryScale = {
  primary1: "#5753c6",
  primary2: "#4e4ab2",
  primary3: "#45429e",
  primary4: "#3c3a8a",
  primary5: "#343176",
  primary6: "#2b2963",
  primary7: "#22214f",
  primary8: "#1a183b",
  primary9: "#111027",
  primary10: "#080813",
}

export const tertiaryScale = {
  tertiary1: "#4A88C7",
  tertiary2: "#427ab3",
  tertiary3: "#3b6c9f",
  tertiary4: "#335f8b",
  tertiary5: "#2c5177",
  tertiary6: "#254463",
  tertiary7: "#1d364f",
  tertiary8: "#16283b",
  tertiary9: "#0e1b27",
  tertiary10: "#070d13",
}

export const opacity = {
  purple: "rgba(87, 83, 198, 0.3)",
  red: "rgba(255, 0, 0, 0.3)",
  black: "rgba(0, 0, 0, 0.15)",
}

export const colors = {
  ...baseColors,
  primaryScale,
  tertiaryScale,
  grayScale,
  opacity,
}

export const rainbowColors = {
  ...baseColors,
  ...primaryScale,
  ...tertiaryScale,
  ...grayScale,
}
