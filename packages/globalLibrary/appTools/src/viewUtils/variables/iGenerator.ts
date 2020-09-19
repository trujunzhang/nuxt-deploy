export interface IFontFace {
  bold: string
  medium: string
  regular: string
  italic: string
  thin: string
}

export interface IFontFamily {
  family: string
  fontFace: IFontFace
}

export interface IThemeDefaultVariables {
  // For vector icons(default icon family).
  iconFamily: string
  // For text
  /**
   * fontFamily: only font family name
   * btnFontFamily/titleFontfamily: one of 'small','medium','large'
   */
  fontFamily: string
  btnFontFamily: string
  titleFontfamily: string
}
