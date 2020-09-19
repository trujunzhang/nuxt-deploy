
import { IItem, IGroupItem } from '~/components/base/Items'

export const menus: Array<IItem|IGroupItem> = [
  {
    icon: 'mdi-view-dashboard',
    title: 'dashboard',
    to: '/'
  },
  {
    icon: 'restaurant',
    title: 'restaurant',
    to: '/restaurant'
  },
  {
    icon: 'event',
    title: 'event',
    to: '/event'
  },
  {
    icon: 'book',
    title: 'recipe',
    to: '/recipe'
  },
  {
    icon: 'photo',
    title: 'photo',
    to: '/photo'
  },
  {
    icon: 'book',
    title: 'user',
    to: '/user'
  },
  {
    icon: 'mdi-calendar-range',
    title: 'review',
    to: '/review'
  }
]
