import * as Types from '@app/types'

export class UserMenuHelper {
  static getRightUserMenus(): ISvgButtonItem[] {
    const menuItems: ISvgButtonItem[] = [
      {
        tag: Types.userMenu.POPUP_ITEM_ABOUT_ME,
        title: 'About Me',
        icons: [
          {
            path:
              'M3 21.002h18a12.703 12.703 0 0 0-7.28-3.583v-1.46c1.156-.845 2.23-2.25 2.302-3.168 1.307-.634 1.58-2.213.65-2.562l-.02.03c.42-.587.677-1.335.677-2.192 0-1.11-.2-2.136-1.017-2.806-.567-1.34-1.746-2.266-3.116-2.266-.804 0-1.54.32-2.13.854a1.223 1.223 0 0 0-.787-.297c-.514 0-.96.345-1.2.852-1.294.478-2.236 1.936-2.236 3.663 0 .79.198 1.526.536 2.136-1 .394-.666 1.9.595 2.59.074.915 1.147 2.322 2.302 3.166v1.457A12.725 12.725 0 0 0 3 21z',
            opacity: '1'
          }
        ]
      },
      {
        tag: Types.userMenu.POPUP_ITEM_INVITE_FRIENDS,
        title: 'Invite Friends',
        icons: [
          {
            path:
              'M10.824 13.817l-2.482 5.946c-.69 1.65-2.995 1.65-3.684 0l-2.482-5.946C1.618 12.48 2.586 11 4.018 11h4.964c1.432 0 2.4 1.48 1.842 2.817zM6.5 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z',
            opacity: '1'
          },
          {
            path:
              'M21.824 13.817l-2.482 5.946c-.69 1.65-2.995 1.65-3.684 0l-2.482-5.946c-.558-1.337.41-2.817 1.842-2.817h4.964c1.432 0 2.4 1.48 1.842 2.817zM17.5 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z',
            opacity: '.502'
          }
        ]
      },
      {
        tag: Types.userMenu.POPUP_ITEM_ACCOUNT_SETTINGS,
        title: 'Account Settings',
        icons: [
          {
            path:
              'M21.872 10.48c.076.497.128 1.002.128 1.52s-.05 1.022-.127 1.518l-3.165.475c-.14.47-.323.92-.552 1.343l1.9 2.57c-.3.408-.62.8-.976 1.156l-.018.018a10.05 10.05 0 0 1-1.154.975l-2.57-1.9a7 7 0 0 1-1.344.553l-.475 3.165a9.94 9.94 0 0 1-1.506.127h-.034c-.51 0-1.01-.052-1.5-.127l-.475-3.165a7 7 0 0 1-1.343-.553l-2.57 1.9c-.408-.3-.798-.62-1.155-.975l-.018-.018a10.068 10.068 0 0 1-.978-1.155l1.9-2.57a6.97 6.97 0 0 1-.552-1.344l-3.164-.475C2.052 13.022 2 12.518 2 12s.052-1.023.128-1.52l3.164-.475a7 7 0 0 1 .553-1.342l-1.9-2.57a10.035 10.035 0 0 1 2.148-2.15l2.57 1.9a7.015 7.015 0 0 1 1.343-.55l.475-3.166C10.98 2.052 11.486 2 12 2s1.023.052 1.52.127l.474 3.165c.47.14.92.323 1.342.552l2.57-1.9a10.044 10.044 0 0 1 2.15 2.148l-1.9 2.57c.23.424.412.874.552 1.343l3.164.475zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z',
            opacity: '1'
          }
        ]
      },
      {
        tag: Types.userMenu.POPUP_ITEM_NEW_RESTAURANT,
        title: 'New Restaurant',
        icons: [
          {
            path:
              'M17.22 22a1.78 1.78 0 0 1-1.74-2.167l1.298-4.98L14 13l1.756-9.657A1.635 1.635 0 0 1 19 3.635V20.22A1.78 1.78 0 0 1 17.22 22zm-7.138-9.156l.697 7.168a1.79 1.79 0 1 1-3.56 0l.7-7.178A3.985 3.985 0 0 1 5 9V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.83c0 1.85-1.2 3.518-2.918 4.014z',
            opacity: '1'
          }
        ]
      }
    ]
    return menuItems
  }
}
