/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

import * as React from 'react'
import { MomentUtils } from '@app/tools'
import { TranslationFunction } from '@app/tools'
import I18n from '@web/server/i18n'
const withTranslation = I18n.withTranslation
import { RelativeTime } from '@app/tools'

function past(v: number | null = null) {
  return new Date().getTime() - (v || 0)
}

interface IFormattedRelativeDefaultProps {
  defaultLocale: string
  textComponent: string
  updateInterval: number
}

type FormattedRelativePropsWithDefaults = IFormattedRelativeProps & IFormattedRelativeDefaultProps

interface IFormattedRelativeWithTranslationProps {
  t: TranslationFunction
}

type FormattedRelativePropsWithTranslation = FormattedRelativePropsWithDefaults &
  IFormattedRelativeWithTranslationProps

interface IFormattedRelativeState {
  formattedRelative: string
}

@(withTranslation('long') as any)
export class FormattedRelative extends React.Component<
  IFormattedRelativeProps,
  IFormattedRelativeState
> {
  public static defaultProps: Partial<FormattedRelativePropsWithDefaults> = {
    defaultLocale: 'en',
    textComponent: 'span',
    updateInterval: 1000 * 10
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      formattedRelative: this.getFormattedRelative(props as FormattedRelativePropsWithTranslation)
    }
  }

  getFormattedRelative({ t, value, defaultLocale }) {
    const formattedDate = MomentUtils.getDate(value)
    const formattedRelative = new RelativeTime(t).format(formattedDate)
    return formattedRelative
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      formattedRelative: this.getFormattedRelative(
        nextProps as FormattedRelativePropsWithTranslation
      )
    })
  }

  render() {
    const { textComponent } = this.props as FormattedRelativePropsWithDefaults
    const { children } = this.props as any

    const { formattedRelative } = this.state

    if (typeof children === 'function') {
      return children(formattedRelative)
    }

    return React.createElement(textComponent, {}, formattedRelative)
  }
}
