import * as React from 'react'
// import * as autosize from 'autosize'

const LineHeight = require('line-height')

interface ITextareaAutosizeProps {
  onChange?: any
  style?: any
  /** Called whenever the textarea resizes */
  onResize?: (e: React.SyntheticEvent<Event>) => void
  /** Minimum number of visible rows */
  rows?: React.HTMLProps<HTMLTextAreaElement>['rows']
  /** Maximum number of visible rows */
  maxRows?: number
  minRows?: number
  inputRef?: any
  /** Called with the ref to the DOM node */
  innerRef?: (textarea: HTMLTextAreaElement) => void
}

interface ITextareaAutosizeState {
  lineHeight: number | null
}

interface ITextareaAutosizeDefaultProps {
  rows: number
  style: any
}

type TextareaAutosizePropsWithDefaults = ITextareaAutosizeProps & ITextareaAutosizeDefaultProps

export type TextareaAutosizeRequiredProps = React.HTMLProps<HTMLTextAreaElement> & {}

// tslint:disable-next-line:no-namespace
export namespace TextareaAutosize {
  export type Props = TextareaAutosizeRequiredProps & Partial<ITextareaAutosizeDefaultProps>
}

type EventType = 'autosize:update' | 'autosize:destroy' | 'autosize:resized'

const UPDATE: EventType = 'autosize:update'
const DESTROY: EventType = 'autosize:destroy'
const RESIZED: EventType = 'autosize:resized'

/**
 * A light replacement for built-in textarea component
 * which automaticaly adjusts its height to match the content
 */
export default class TextareaAutosize extends React.Component<
  React.HTMLProps<HTMLTextAreaElement> & ITextareaAutosizeProps,
  ITextareaAutosizeState
> {
  private textarea: HTMLTextAreaElement = null as any
  private currentValue: TextareaAutosize.Props['value']

  public static defaultProps: Partial<TextareaAutosizePropsWithDefaults> = {
    rows: 1,
    style: {}
  }

  constructor(props) {
    super(props)

    this.state = {
      lineHeight: null
    }
  }

  componentDidMount() {
    const { onResize, maxRows } = this.props

    if (typeof maxRows === 'number') {
      this.updateLineHeight()
    }

    /*
      the defer is needed to:
      - force "autosize" to activate the scrollbar when this.props.maxRows is passed
      - support StyledComponents (see #71)
    */
    // TODO: DJZHANG(2020)
    // setTimeout(() => autosize(this.textarea))

    if (onResize) {
      this.textarea.addEventListener(RESIZED, onResize as any)
    }
  }

  componentWillUnmount() {
    const { onResize } = this.props
    if (onResize) {
      this.textarea.removeEventListener(RESIZED, onResize as any)
    }
    this.dispatchEvent(DESTROY)
  }

  dispatchEvent = (EVENT_TYPE: EventType) => {
    const event = document.createEvent('Event')
    event.initEvent(EVENT_TYPE, true, false)

    this.textarea.dispatchEvent(event)
  }

  updateLineHeight = () => {
    if (!!this.textarea) {
      const nextLineHeight = LineHeight(this.textarea)
      this.setState({
        lineHeight: nextLineHeight
      })
    }
  }

  onChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const { onChange } = this.props
    this.currentValue = (e.currentTarget as any).value
    if (!!onChange) {
      onChange(e)
    }
  }

  saveDOMNodeRef = (ref: HTMLTextAreaElement) => {
    const { innerRef, inputRef } = this.props

    if (inputRef) {
      inputRef(ref)
    }
    if (innerRef) {
      innerRef(ref)
    }

    this.textarea = ref
  }

  getLocals = () => {
    const { onResize, maxRows, onChange, style, innerRef, ...props } = this.props

    const { lineHeight } = this.state
    const saveDOMNodeRef = this.saveDOMNodeRef

    // const {
    //   props: {onResize, maxRows, onChange, style, innerRef, ...props},
    //   state: {lineHeight},
    //   saveDOMNodeRef
    // } = this

    const maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null

    return {
      ...props,
      saveDOMNodeRef,
      style: maxHeight ? { ...style, maxHeight } : style,
      onChange: this.onChange
    }
  }

  render() {
    const { children, saveDOMNodeRef, ...locals } = this.getLocals()

    return (
      <textarea {...locals} ref={saveDOMNodeRef}>
        {children}
      </textarea>
    )
  }

  componentDidUpdate() {
    if (this.props.value !== this.currentValue) {
      this.dispatchEvent(UPDATE)
    }
  }
}
