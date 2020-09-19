
export interface IItem {
  href?: string
  icon?: string
  subtitle?: string
  title: string
  to?: string
}

export interface IGroupItem {
  group: string
  avatar?: string
  title: string
  children: Array<IItem|IGroupItem>
}

interface ISubGroupItem {
  avatar: any
  group: any
  title: any
  children: []
}
