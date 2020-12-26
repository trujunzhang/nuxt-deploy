
import { IItem, IGroupItem } from '~/components/base/Items'

export const menus: Array<IItem|IGroupItem> = [
  {
    icon: 'mdi-view-dashboard',
    title: 'dashboard',
    to: '/'
  },
  {
    icon: 'book',
    title: 'user',
    to: '/user'
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
    icon: 'event',
    title: 'peopleInEvent',
    to: '/peopleInEvent'
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
    icon: 'mdi-calendar-range',
    title: 'review',
    to: '/review'
  }
]
