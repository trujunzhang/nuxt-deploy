
import { IItem, IGroupItem } from '~/components/base/Items'

export const menus: Array<IItem|IGroupItem> = [
  {
    icon: 'mdi-view-dashboard',
    title: 'dashboard',
    to: '/'
  },
  {
    group: '/pages',
    icon: 'mdi-image',
    title: 'pages',
    children: [
      {
        title: 'pricing',
        to: 'pricing'
      },
      {
        title: 'rtl',
        to: 'rtl'
      },
      {
        title: 'timeline',
        to: 'timeline'
      },
      {
        title: 'login',
        to: 'login'
      },
      {
        title: 'register',
        to: 'pricing'
      },
      {
        title: 'lock',
        to: 'lock'
      },
      {
        title: 'user',
        to: 'user'
      },
      {
        title: 'error',
        to: '404'
      }
    ]
  },
  {
    group: '/components',
    icon: 'mdi-view-comfy',
    title: 'components',
    children: [
      {
        title: 'multi',
        group: '',
        children: [
          {
            title: 'example',
            href: '#'
          }
        ]
      },
      {
        title: 'buttons',
        to: 'buttons'
      },
      {
        title: 'grid',
        to: 'grid-system'
      },
      {
        title: 'tabs',
        to: 'tabs'
      },
      {
        title: 'notifications',
        to: 'notifications'
      },
      {
        title: 'icons',
        to: 'icons'
      },
      {
        title: 'typography',
        to: 'typography'
      }
    ]
  },
  {
    group: '/forms',
    icon: 'mdi-clipboard-outline',
    title: 'forms',
    children: [
      {
        title: 'rforms',
        to: 'regular'
      },
      {
        title: 'eforms',
        to: 'extended'
      },
      {
        title: 'vforms',
        to: 'validation'
      },
      {
        title: 'wizard',
        to: 'wizard'
      }
    ]
  },
  {
    group: '/tables',
    icon: 'mdi-grid',
    title: 'tables',
    children: [
      {
        title: 'rtables',
        to: 'regular-tables'
      },
      {
        title: 'etables',
        to: 'extended-tables'
      },
      {
        title: 'dtables',
        to: 'data-tables'
      }
    ]
  },
  {
    icon: 'mdi-widgets',
    title: 'widgets',
    to: '/widgets'
  },
  {
    icon: 'mdi-chart-timeline-variant',
    title: 'charts',
    to: '/charts'
  },
  {
    icon: 'mdi-calendar-range',
    title: 'calendar',
    to: '/calendar'
  }
]
