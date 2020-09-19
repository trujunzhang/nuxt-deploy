import { Icon } from 'react-native-vector-icons/Icon'

export type VectorIcon = Icon
export type VectorIconWithNull = VectorIcon | null

export interface IVectorIconsDict {
  AntDesign: Icon | any
  Entypo: Icon | any
  EvilIcons: Icon | any
  Feather: Icon | any
  FontAwesome: Icon | any
  //  issue: (2019-02-27)
  //  'FontAwesome5 is not supported by @expo/vector-icons:
  //    "name": "@expo/vector-icons",
  //    "version": "9.0.0
  //
  // FontAwesome5:Icon | any
  Foundation: Icon | any
  Ionicons: Icon | any
  MaterialCommunityIcons: Icon | any
  MaterialIcons: Icon | any
  Octicons: Icon | any
  SimpleLineIcons: Icon | any
  Zocial: Icon | any
}

export type VectorIconsDictWithNull = IVectorIconsDict | null
