[![npm version](https://badge.fury.io/js/react-native-iphone-screen-helper.svg)](https://badge.fury.io/js/react-native-iphone-screen-helper)

# react-native-iphone-screen-helper
A library to help you design your react-native app for notched and dynamic island iPhones.


I forked this project to continue working on it.
This project is a fork of https://www.npmjs.com/package/react-native-iphone-x-helper .
The original repository is not maintained anymore.

The project will be continued in this repository. react-native-iphone-screen-helper is fully compatible.
If you want to support the project feel free to contact me or create a pull request with your feature.


## Installing ##
`yarn add react-native-iphone-screen-helper`

or

`npm i react-native-iphone-screen-helper --save`

## API ##

### ifIphoneX(iphoneXStyle, \[regularStyle\]) ###
This method is for creating stylesheets with the iPhone X and later models, including those with dynamic islands, in mind.

#### Parameters ####
**iphoneXStyle** - the style to apply if you're on iPhone X or newer models with a notch or dynamic island.

**regularStyle (*optional*)** - the style to apply if you're not on iPhone X

#### Example ####
```js
// in style.js

import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-screen-helper'

export default StyleSheet.create({
    header:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding:10,
        height: 60,
        backgroundColor: 'transparent',
        ...ifIphoneX({
            paddingTop: 50
        }, {
            paddingTop: 20
        })
    },
});
```

### isIphoneX() ###

**returns** - `true` if you're running on an iPhone X or a newer model with a notch or dynamic island.

#### Example ####
```js
import { isIphoneX } from 'react-native-iphone-screen-helper'

// ...

if (isIphoneX()) {
    // do this...
} else {
    // do that...
}
```

### getStatusBarHeight() ###

**returns** - the height of the status bar:
- `62` for safe iPhone 16 Pro Max
- `59` for safe iPhone 14 Pro, 14 Pro Max, 15, 15 Plus, 15 Pro, 15 Pro Max, 16, 16 Plus, 16 Pro
- `50` for safe iPhone 12 Mini, 13 Mini
- `47` for safe iPhone 12, 12 Pro, 12 Pro Max, 13, 13 Pro, 13 Pro Max, 14, 14 Plus
- `44` for safe iPhone X, Xs, Xs Max, 11 Pro, 11 Pro Max
- `48` for safe iPhone Xr, 11
- `20` for other devices
- `StatusBar.currentHeight` for Android.

#### Example ####

```js
// in style.js

import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-screen-helper'

export default StyleSheet.create({
    header:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding:10,
        height: 60,
        backgroundColor: 'transparent',
        paddingTop: getStatusBarHeight()
    },
});
```

### getBottomSpace ###

**returns** - the height of the bottom to fit the safe area: `34` for iPhone X and newer models with a notch or dynamic island, and `0` for other devices.

#### Example ####

```js
// in style.js

import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-screen-helper'

export default StyleSheet.create({
  totalview: {
    flex: 1,
    backgroundColor: 'transparent',
    marginBottom: getBottomSpace()
  },
});
```


## Applied iPhone series
| DeviceID   | DeviceName           | ScreenResolution       | StatusbarHeight |
|:-----------|:---------------------|:-----------------------|----------------:|
| iPhone10,3 | iPhone X Global      | 375 x 812 (3x ~458ppi) |              44 |
| iPhone10,6 | iPhone X GSM         | 375 x 812 (3x ~458ppi) |              44 |
| iPhone11,2 | iPhone Xs            | 375 x 812 (3x ~458ppi) |              44 |
| iPhone11,4 | iPhone Xs Max        | 414 x 896 (3x ~458ppi) |              44 |
| iPhone11,6 | iPhone Xs Max Global | 414 x 896 (3x ~458ppi) |              44 |
| iPhone11,8 | iPhone Xr            | 414 x 896 (2x ~326ppi) |              48 |
| iPhone12,1 | iPhone 11            | 414 x 896 (2x ~326ppi) |              48 |
| iPhone12,3 | iPhone 11 Pro        | 375 x 812 (3x ~458ppi) |              44 |
| iPhone12,5 | iPhone 11 Pro Max    | 414 x 896 (3x ~458ppi) |              44 |
| iPhone13,1 | iPhone 12 mini       | 360 x 780 (3x ~476ppi) |              50 |
| iPhone13,2 | iPhone 12            | 390 x 844 (3x ~460ppi) |              47 |
| iPhone13,3 | iPhone 12 Pro        | 390 x 844 (3x ~460ppi) |              47 |
| iPhone13,4 | iPhone 12 Pro Max    | 428 x 926 (3x ~458ppi) |              47 |
| iPhone14,4 | iPhone 13 mini       | 375 x 812 (3x ~476ppi) |              50 |
| iPhone14,5 | iPhone 13            | 390 x 844 (3x ~460ppi) |              47 |
| iPhone14,2 | iPhone 13 Pro        | 390 x 844 (3x ~460ppi) |              47 |
| iPhone14,3 | iPhone 13 Pro Max    | 428 x 926 (3x ~458ppi) |              47 |
| iPhone14,7 | iPhone 14            | 390 x 844 (3x ~460ppi) |              47 |
| iPhone14,8 | iPhone 14 Plus       | 428 x 926 (3x ~458ppi) |              47 |
| iPhone15,2 | iPhone 14 Pro        | 393 x 852 (3x ~460ppi) |              59 |
| iPhone15,3 | iPhone 14 Pro Max    | 430 x 932 (3x ~458ppi) |              59 |
| iPhone15,4 | iPhone 15            | 393 x 852 (3x ~460ppi) |              59 |
| iPhone15,5 | iPhone 15 Plus       | 430 x 932 (3x ~460ppi) |              59 |
| iPhone16,1 | iPhone 15 Pro        | 393 x 852 (3x ~460ppi) |              59 |
| iPhone16,2 | iPhone 15 Pro Max    | 430 x 932 (3x ~460ppi) |              59 |
| iPhone16,4 | iPhone 16            | 393 x 852 (3x ~460ppi) |              59 |
| iPhone16,5 | iPhone 16 Plus       | 430 x 932 (3x ~460ppi) |              59 |
| iPhone17,1 | iPhone 16 Pro        | 402 x 874 (3x ~460ppi) |              59 |
| iPhone17,2 | iPhone 16 Pro Max    | 440 x 956 (3x ~460ppi) |              62 |


## Licence ##
**MIT**
