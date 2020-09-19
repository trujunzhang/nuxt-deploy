// IAppVariables

export interface IBaseVariables {
  platformStyle: 'material' | 'base' | undefined
  platform: any
}

export interface IAccordionVariables {
  // Accordion
  headerStyle: string
  iconStyle: string
  contentStyle: string
  expandedIconStyle: string
  accordionBorderColor: string
}

export interface IAndroidVariables {
  // Android
  androidRipple: boolean
  androidRippleColor: string
  androidRippleColorDark: string
  btnUppercaseAndroidText: boolean
}

export interface IBadgeVariables {
  // Badge
  badgeBg: string
  badgeColor: string
  badgePadding: number
}

export interface IButtonVariables {
  // Button
  btnFontFamily: string
  btnDisabledBg: string
  buttonPadding: number
}

export interface IButtonColorVariables {
  // Button Color
  brandPrimary: string
  brandInfo: string
  brandSuccess: string
  brandDanger: string
  brandWarning: string
  brandDark: string
  brandLight: string
  brandFacebook: string
  brandTwitter: string
}

export interface IButtonFuncVariables {
  // Button Func
  btnPrimaryBg: string
  btnPrimaryColor: string
  btnInfoBg: string
  btnInfoColor: string
  btnSuccessBg: string
  btnSuccessColor: string
  btnDangerBg: string
  btnDangerColor: string
  btnWarningBg: string
  btnWarningColor: string
  btnTwitterBg: string
  btnFacebookBg: string
  btnTextSize: number
  btnTextSizeLarge: number
  btnTextSizeSmall: number
  borderRadiusLarge: number
  iconSizeLarge: number
  iconSizeSmall: number
}

export interface ICardVariables {
  // Card
  cardDefaultBg: string
  cardBorderColor: string
  cardBorderRadius: 2
  cardItemPadding: number
}

export interface ICheckBoxVariables {
  // CheckBox
  CheckboxRadius: number
  CheckboxBorderWidth: number
  CheckboxPaddingLeft: number
  CheckboxPaddingBottom: number
  CheckboxIconSize: number
  CheckboxIconMarginTop: number | undefined
  CheckboxFontSize: number
  checkboxBgColor: string
  checkboxSize: number
  checkboxTickColor: string
}

export interface IContainerVariables {
  // Container
  containerBgColor: string
}

export interface IDatePickerVariables {
  // Date Picker
  datePickerTextColor: string
  datePickerBg: string
}

export interface IFontVariables {
  // Font
  DefaultFontSize: number
  fontFamily: string
  fontSizeBase: number
}

export interface IFontFuncVariables {
  // Font Func
  fontSizeH1: number
  fontSizeH2: number
  fontSizeH3: number
}

export interface IFooterVariables {
  // Footer
  footerHeight: number
  footerDefaultBg: string
  footerPaddingBottom: number
}
export interface IFooterTabVariables {
  // FooterTab
  tabBarTextColor: string
  tabBarTextSize: number
  activeTab: string
  sTabBarActiveTextColor: string
  tabBarActiveTextColor: string
  tabActiveBgColor: string
}
export interface IHeaderVariables {
  // Header
  toolbarBtnColor: string
  toolbarDefaultBg: string
  toolbarHeight: number
  toolbarPaddingTop: number
  toolbarParallaxHeight: number
  toolbarParallaxPaddingTop: number
  toolbarSearchIconSize: number
  toolbarInputColor: string
  searchBarHeight: number
  searchBarInputHeight: number
  toolbarBtnTextColor: string
  iosStatusbar: string
  toolbarDefaultBorder: string
}

export interface IHeaderFuncVariables {
  // Header Func
  statusBarColor: number
  darkenHeader: number
}

export interface IIconVariables {
  // Icon
  iconFamily: string
  iconFontSize: number
  iconHeaderSize: number
}
export interface IInputGroupVariables {
  // InputGroup
  inputFontSize: number
  inputBorderColor: string
  inputSuccessBorderColor: string
  inputErrorBorderColor: string
  inputHeightBase: number
}

export interface IInputGroupFuncVariables {
  // InputGroup Func
  inputColor: string
  inputColorPlaceholder: string
}

export interface ILineHeightVariables {
  // Line Height
  btnLineHeight: number
  lineHeightH1: number
  lineHeightH2: number
  lineHeightH3: number
  lineHeight: number
}
export interface IPageScrollVariables {
  // PageScroll
  pageScrollBackground: string
}
export interface IListVariables {
  // List
  listBg: string
  listBorderColor: string
  listDividerBg: string
  listBtnUnderlayColor: string
  listItemPadding: number
  listNoteColor: string
  listNoteSize: number
  listItemSelected: string
}
export interface IProgressBarVariables {
  // Progress Bar
  defaultProgressColor: string
  inverseProgressColor: string
}
export interface IRadioButtonVariables {
  // Radio Button
  radioBtnSize: number
  radioSelectedColorAndroid: string
  radioBtnLineHeight: number
}

export interface IRadioButtonFuncVariables {
  // Radio Button
  radioColor: string
}

export interface ISegmentVariables {
  // Segment
  segmentBackgroundColor: string
  segmentActiveBackgroundColor: string
  segmentTextColor: string
  segmentActiveTextColor: string
  segmentBorderColor: string
  segmentBorderColorMain: string
}
export interface ISpinnerVariables {
  // Spinner
  defaultSpinnerColor: string
  inverseSpinnerColor: string
}
export interface ITabVariables {
  // Tab
  tabDefaultBg: string
  topTabBarTextColor: string
  topTabBarActiveTextColor: string
  topTabBarBorderColor: string
  topTabBarActiveBorderColor: string
}
export interface ITabsVariables {
  // Tabs
  tabBgColor: string
  tabFontSize: number
}
export interface ITextVariables {
  // Text
  textColor: string
  inverseTextColor: string
  noteFontSize: number
}

export interface ITextFuncVariables {
  // Text Func
  defaultTextColor: string
}

export interface ITitleVariables {
  // Title
  titleFontfamily: string
  titleFontSize: number
  titleFontColor: string
  subTitleFontSize: number
  subtitleColor: string
}
export interface IOtherVariables {
  // Other
  borderRadiusBase: number
  borderWidth: number
  contentPadding: number
  dropdownLinkColor: string
  inputLineHeight: number
  deviceWidth: number
  deviceHeight: number
  inputGroupRoundedBorderRadius: number
}
export interface IParallaxVariables {
  // Parallax
  parallaxFixedHeaderContainerStyle: any
  parallaxStickHeaderContainerStyle: any
}

export interface IInsetModel {
  portrait: {
    topInset: number
    leftInset: number
    rightInset: number
    bottomInset: number
  }
  landscape: {
    topInset: number
    leftInset: number
    rightInset: number
    bottomInset: number
  }
}

export interface IIPhoneXSafeAreaVariables {
  // iPhoneX SafeArea
  Inset: IInsetModel
}

//  theme base variables.
// ====================
export interface IThemeVariables
  extends IBaseVariables,
    IAccordionVariables,
    IAndroidVariables,
    IBadgeVariables,
    IButtonVariables,
    IButtonColorVariables,
    IButtonFuncVariables,
    ICardVariables,
    ICheckBoxVariables,
    IContainerVariables,
    IDatePickerVariables,
    IFontVariables,
    IFontFuncVariables,
    IFooterVariables,
    IFooterTabVariables,
    IHeaderVariables,
    IHeaderFuncVariables,
    IIconVariables,
    IInputGroupVariables,
    IInputGroupFuncVariables,
    ILineHeightVariables,
    IPageScrollVariables,
    IListVariables,
    IProgressBarVariables,
    IRadioButtonVariables,
    IRadioButtonFuncVariables,
    ISegmentVariables,
    ISpinnerVariables,
    ITabVariables,
    ITabsVariables,
    ITextVariables,
    ITextFuncVariables,
    ITitleVariables,
    IOtherVariables,
    IParallaxVariables,
    IIPhoneXSafeAreaVariables {}
