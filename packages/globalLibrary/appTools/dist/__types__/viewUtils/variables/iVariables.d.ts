export interface IBaseVariables {
    platformStyle: 'material' | 'base' | undefined;
    platform: any;
}
export interface IAccordionVariables {
    headerStyle: string;
    iconStyle: string;
    contentStyle: string;
    expandedIconStyle: string;
    accordionBorderColor: string;
}
export interface IAndroidVariables {
    androidRipple: boolean;
    androidRippleColor: string;
    androidRippleColorDark: string;
    btnUppercaseAndroidText: boolean;
}
export interface IBadgeVariables {
    badgeBg: string;
    badgeColor: string;
    badgePadding: number;
}
export interface IButtonVariables {
    btnFontFamily: string;
    btnDisabledBg: string;
    buttonPadding: number;
}
export interface IButtonColorVariables {
    brandPrimary: string;
    brandInfo: string;
    brandSuccess: string;
    brandDanger: string;
    brandWarning: string;
    brandDark: string;
    brandLight: string;
    brandFacebook: string;
    brandTwitter: string;
}
export interface IButtonFuncVariables {
    btnPrimaryBg: string;
    btnPrimaryColor: string;
    btnInfoBg: string;
    btnInfoColor: string;
    btnSuccessBg: string;
    btnSuccessColor: string;
    btnDangerBg: string;
    btnDangerColor: string;
    btnWarningBg: string;
    btnWarningColor: string;
    btnTwitterBg: string;
    btnFacebookBg: string;
    btnTextSize: number;
    btnTextSizeLarge: number;
    btnTextSizeSmall: number;
    borderRadiusLarge: number;
    iconSizeLarge: number;
    iconSizeSmall: number;
}
export interface ICardVariables {
    cardDefaultBg: string;
    cardBorderColor: string;
    cardBorderRadius: 2;
    cardItemPadding: number;
}
export interface ICheckBoxVariables {
    CheckboxRadius: number;
    CheckboxBorderWidth: number;
    CheckboxPaddingLeft: number;
    CheckboxPaddingBottom: number;
    CheckboxIconSize: number;
    CheckboxIconMarginTop: number | undefined;
    CheckboxFontSize: number;
    checkboxBgColor: string;
    checkboxSize: number;
    checkboxTickColor: string;
}
export interface IContainerVariables {
    containerBgColor: string;
}
export interface IDatePickerVariables {
    datePickerTextColor: string;
    datePickerBg: string;
}
export interface IFontVariables {
    DefaultFontSize: number;
    fontFamily: string;
    fontSizeBase: number;
}
export interface IFontFuncVariables {
    fontSizeH1: number;
    fontSizeH2: number;
    fontSizeH3: number;
}
export interface IFooterVariables {
    footerHeight: number;
    footerDefaultBg: string;
    footerPaddingBottom: number;
}
export interface IFooterTabVariables {
    tabBarTextColor: string;
    tabBarTextSize: number;
    activeTab: string;
    sTabBarActiveTextColor: string;
    tabBarActiveTextColor: string;
    tabActiveBgColor: string;
}
export interface IHeaderVariables {
    toolbarBtnColor: string;
    toolbarDefaultBg: string;
    toolbarHeight: number;
    toolbarPaddingTop: number;
    toolbarParallaxHeight: number;
    toolbarParallaxPaddingTop: number;
    toolbarSearchIconSize: number;
    toolbarInputColor: string;
    searchBarHeight: number;
    searchBarInputHeight: number;
    toolbarBtnTextColor: string;
    iosStatusbar: string;
    toolbarDefaultBorder: string;
}
export interface IHeaderFuncVariables {
    statusBarColor: number;
    darkenHeader: number;
}
export interface IIconVariables {
    iconFamily: string;
    iconFontSize: number;
    iconHeaderSize: number;
}
export interface IInputGroupVariables {
    inputFontSize: number;
    inputBorderColor: string;
    inputSuccessBorderColor: string;
    inputErrorBorderColor: string;
    inputHeightBase: number;
}
export interface IInputGroupFuncVariables {
    inputColor: string;
    inputColorPlaceholder: string;
}
export interface ILineHeightVariables {
    btnLineHeight: number;
    lineHeightH1: number;
    lineHeightH2: number;
    lineHeightH3: number;
    lineHeight: number;
}
export interface IPageScrollVariables {
    pageScrollBackground: string;
}
export interface IListVariables {
    listBg: string;
    listBorderColor: string;
    listDividerBg: string;
    listBtnUnderlayColor: string;
    listItemPadding: number;
    listNoteColor: string;
    listNoteSize: number;
    listItemSelected: string;
}
export interface IProgressBarVariables {
    defaultProgressColor: string;
    inverseProgressColor: string;
}
export interface IRadioButtonVariables {
    radioBtnSize: number;
    radioSelectedColorAndroid: string;
    radioBtnLineHeight: number;
}
export interface IRadioButtonFuncVariables {
    radioColor: string;
}
export interface ISegmentVariables {
    segmentBackgroundColor: string;
    segmentActiveBackgroundColor: string;
    segmentTextColor: string;
    segmentActiveTextColor: string;
    segmentBorderColor: string;
    segmentBorderColorMain: string;
}
export interface ISpinnerVariables {
    defaultSpinnerColor: string;
    inverseSpinnerColor: string;
}
export interface ITabVariables {
    tabDefaultBg: string;
    topTabBarTextColor: string;
    topTabBarActiveTextColor: string;
    topTabBarBorderColor: string;
    topTabBarActiveBorderColor: string;
}
export interface ITabsVariables {
    tabBgColor: string;
    tabFontSize: number;
}
export interface ITextVariables {
    textColor: string;
    inverseTextColor: string;
    noteFontSize: number;
}
export interface ITextFuncVariables {
    defaultTextColor: string;
}
export interface ITitleVariables {
    titleFontfamily: string;
    titleFontSize: number;
    titleFontColor: string;
    subTitleFontSize: number;
    subtitleColor: string;
}
export interface IOtherVariables {
    borderRadiusBase: number;
    borderWidth: number;
    contentPadding: number;
    dropdownLinkColor: string;
    inputLineHeight: number;
    deviceWidth: number;
    deviceHeight: number;
    inputGroupRoundedBorderRadius: number;
}
export interface IParallaxVariables {
    parallaxFixedHeaderContainerStyle: any;
    parallaxStickHeaderContainerStyle: any;
}
export interface IInsetModel {
    portrait: {
        topInset: number;
        leftInset: number;
        rightInset: number;
        bottomInset: number;
    };
    landscape: {
        topInset: number;
        leftInset: number;
        rightInset: number;
        bottomInset: number;
    };
}
export interface IIPhoneXSafeAreaVariables {
    Inset: IInsetModel;
}
export interface IThemeVariables extends IBaseVariables, IAccordionVariables, IAndroidVariables, IBadgeVariables, IButtonVariables, IButtonColorVariables, IButtonFuncVariables, ICardVariables, ICheckBoxVariables, IContainerVariables, IDatePickerVariables, IFontVariables, IFontFuncVariables, IFooterVariables, IFooterTabVariables, IHeaderVariables, IHeaderFuncVariables, IIconVariables, IInputGroupVariables, IInputGroupFuncVariables, ILineHeightVariables, IPageScrollVariables, IListVariables, IProgressBarVariables, IRadioButtonVariables, IRadioButtonFuncVariables, ISegmentVariables, ISpinnerVariables, ITabVariables, ITabsVariables, ITextVariables, ITextFuncVariables, ITitleVariables, IOtherVariables, IParallaxVariables, IIPhoneXSafeAreaVariables {
}
