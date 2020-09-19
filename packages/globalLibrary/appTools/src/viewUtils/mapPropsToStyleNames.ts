export const mapPropsToStyleNames = (styleNames: any, props: any) => {
  const keys = Object.keys(props)
  const values = Object.values(props)

  keys.map((key: any, index: number) => {
    if (values[index]) {
      styleNames.push(key)
    }
  })

  return styleNames
}
