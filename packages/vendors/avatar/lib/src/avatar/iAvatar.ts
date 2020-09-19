import {
  IAvatarBaseWebRenderProps,
  IAvatarBaseClientRenderProps,
  IAvatarBaseStyleProps,
  IAvatarBaseClassNameProps
} from './iAvatarBasic'

import { IAvatarOnlyClientProps } from './iAvatarCommon'

import { IAvatarSourceProps } from './iAvatarSource'

export interface IAvatarURISource {
  uri: string
}

export type AvatarURISourceWithNull = IAvatarURISource | null

export interface IAvatarProps
  extends IAvatarSourceProps,
    IAvatarBaseClassNameProps,
    IAvatarBaseWebRenderProps,
    IAvatarBaseClientRenderProps,
    IAvatarBaseStyleProps,
    IAvatarOnlyClientProps {
  fgColor?: string
  round?: boolean | string
  size?: number
  textSizeRatio?: number
  unstyled?: boolean
  // Event
  onClick?: () => any
}

export interface IAvatarDefaultProps {
  className: string
  fgColor: string
  round: boolean | string
  size: number
  textSizeRatio: number
  unstyled: boolean
}

export interface IAvatarState {
  internal: any
  src?: string | null
  value?: string | null
  color?: string
  sourceName?: any
}

export type AvatarPropsWithDefaults = IAvatarProps & IAvatarDefaultProps
