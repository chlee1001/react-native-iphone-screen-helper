import { Dimensions, Platform, StatusBar } from 'react-native'

const checkDimensions = (dimensions) => {
  const window = Dimensions.get('window')
  const screen = Dimensions.get('screen')

  return dimensions.some(([width, height]) => {
    return (window.height === height && window.width === width) ||
      (window.width === height && window.height === width) ||
      (screen.height === height && screen.width === width) ||
      (screen.width === height && screen.height === width)
  })
}
const checkStatusBarHeight = (height) => {
  const resolutions = {
    44: [
      [375, 812],
      [414, 896],
    ],
    47: [
      [390, 844],
      [428, 926],
    ],
    48: [
      [414, 896],
    ],
    50: [
      [360, 780],
      [375, 812],
    ],
    59: [
      [393, 852],
      [430, 932],
      [402, 874],
    ],
    62: [
      [440, 956],
    ],
  }

  return Object.keys(resolutions).some(key => {
    return parseInt(key) === height && checkDimensions(resolutions[key])
  })
}

const getIphoneStatusBarHeight = () => {
  if (isIphoneX()) {
    if (checkStatusBarHeight(47)) {
      return 47
    }
    if (checkStatusBarHeight(48)) {
      return 48
    }
    if (checkStatusBarHeight(50)) {
      return 50
    }
    if (checkStatusBarHeight(59)) {
      return 59
    }
    if (checkStatusBarHeight(62)) {
      return 62
    }
    return 44
  }
  return 20
}

export function isIphoneX () {
  return Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV &&
    checkDimensions([
      [780, 360],
      [812, 375],
      [844, 390],
      [896, 414],
      [926, 428],
      [852, 393],
      [932, 430],
      [874, 402],
      [956, 440],
    ])
}

export function isDynamicIsland () {
  return Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV &&
    (checkStatusBarHeight(59) || checkStatusBarHeight(62))
}

export function ifIphoneX (iphoneXStyle, regularStyle) {
  return isIphoneX() ? iphoneXStyle : regularStyle
}

export function getStatusBarHeight () {
  return Platform.select({
    ios: getIphoneStatusBarHeight(),
    android: StatusBar.currentHeight,
    default: 0,
  })
}

export function getBottomSpace () {
  return isIphoneX() ? 34 : 0
}
