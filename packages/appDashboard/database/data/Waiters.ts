import { IFBPhoto } from 'ieattatypes/types/index'

export const loadWaiters = (): IFBPhoto[] => {
  const next = waiters.map((item: IFBPhoto) => {
    // console.log(JSON.stringify(item))
    return item
  })
  // console.log(JSON.stringify(next))
  return next
}

const waiters : IFBPhoto[] = [
  {
    uniqueId: '12345678-b3a9-4302-9c23-c59b876da99e',
    originalUrl: 'https://res.cloudinary.com/di3fvexj8/image/upload/v1611817447/politicl/waiters_otaoty.jpg',
    thumbnailUrl: '',
    photoType: 'waiter',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    createdAt: '2017-10-09T06:02:37.069+0000',
    updatedAt: '2017-11-06T09:18:51.460+0000',
    userId: 'zis2vkx9G2',
    creatorId: 'tiBfFJkC71',
    flag: '1',
    geoHash: 'hb00n8n2pb08',
    latitude: -118.253985,
    longitude: 34.044561,
    offlinePath: '',
    extraNote: '',
    username: '',
    avatarUrl: ''
  },
  {
    uniqueId: '23456789-b3a9-4302-9c23-c59b876da99e',
    originalUrl: 'https://res.cloudinary.com/di3fvexj8/image/upload/v1611817447/politicl/1443281_fxhjqq.jpg',
    thumbnailUrl: '',
    photoType: 'waiter',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    createdAt: '2017-10-09T06:02:37.069+0000',
    updatedAt: '2017-11-06T09:18:51.460+0000',
    userId: 'zis2vkx9G2',
    creatorId: 'tiBfFJkC71',
    flag: '1',
    geoHash: 'hb00n8n2pb08',
    latitude: -118.253985,
    longitude: 34.044561,
    offlinePath: '',
    extraNote: '',
    username: '',
    avatarUrl: ''
  },
  {
    uniqueId: '34567890-b3a9-4302-9c23-c59b876da99e',
    originalUrl: 'https://res.cloudinary.com/di3fvexj8/image/upload/v1611817447/politicl/waiter0-1200x780_josel8.jpg',
    thumbnailUrl: '',
    photoType: 'waiter',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    createdAt: '2017-10-09T06:02:37.069+0000',
    updatedAt: '2017-11-06T09:18:51.460+0000',
    userId: 'zis2vkx9G2',
    creatorId: 'tiBfFJkC71',
    flag: '1',
    geoHash: 'hb00n8n2pb08',
    latitude: -118.253985,
    longitude: 34.044561,
    offlinePath: '',
    extraNote: '',
    username: '',
    avatarUrl: ''
  },
  {
    uniqueId: '45678901-b3a9-4302-9c23-c59b876da99e',
    originalUrl: 'https://res.cloudinary.com/di3fvexj8/image/upload/v1611817447/politicl/the-dining-room_ozkpjg.jpg',
    thumbnailUrl: '',
    photoType: 'waiter',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    createdAt: '2017-10-09T06:02:37.069+0000',
    updatedAt: '2017-11-06T09:18:51.460+0000',
    userId: 'zis2vkx9G2',
    creatorId: 'tiBfFJkC71',
    flag: '1',
    geoHash: 'hb00n8n2pb08',
    latitude: -118.253985,
    longitude: 34.044561,
    offlinePath: '',
    extraNote: '',
    username: '',
    avatarUrl: ''
  },
  {
    uniqueId: '56789012-b3a9-4302-9c23-c59b876da99e',
    originalUrl: 'https://res.cloudinary.com/di3fvexj8/image/upload/v1611817446/politicl/server-recommending-item-female-customer-1-866x577_cv2ez1.jpg',
    thumbnailUrl: '',
    photoType: 'waiter',
    restaurantId: '035ac47c-5781-4da8-af21-35c97a46c101',
    createdAt: '2017-10-09T06:02:37.069+0000',
    updatedAt: '2017-11-06T09:18:51.460+0000',
    userId: 'zis2vkx9G2',
    creatorId: 'tiBfFJkC71',
    flag: '1',
    geoHash: 'hb00n8n2pb08',
    latitude: -118.253985,
    longitude: 34.044561,
    offlinePath: '',
    extraNote: '',
    username: '',
    avatarUrl: ''
  }
]
