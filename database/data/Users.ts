import { IFBUser } from 'ieattatypes'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { restaurants } from '~/database/data/Restaurants'

export const filterUser = (id: string) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      return users[i]
    }
  }
  return null
}
export const loadUsers = (): IFBUser[] => {
  const next = users.map((item: IFBUser) => {
    // const geoHash = GeoHashUtils.encode(item.latitude, item.longitude)
    // item.geoHash = geoHash
    // item.slug = slugify(item.displayName)
    // console.log(JSON.stringify(item))
    return item
  })
  // console.log(JSON.stringify(next))
  return next
}

export const users: IFBUser[] = [
  {
    id: 'PqAx0FCrEn',
    username: 'Derek Hele',
    slug: 'Derek_Hele',
    email: 'derek@gmail.com',
    // password: 'pwd123',
    loginType: 'email',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530557/politicl/o_dogqeq.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--9V2n6rtO--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_dogqeq',
    // url: 'https://s3-media3.fl.yelpcdn.com/photo/csqJftg9mcuR9RqnImiqBQ/o.jpg',
    // uniqueId: 'f6cc029a-b0d3-4534-abbf-62028f9e4697',
    createdAt: '2017-10-09T06:29:09.750+0000',
    updatedAt: '2017-10-09T06:29:22.542+0000'
  },
  {
    id: 'ua04ebIMCn',
    username: 'Sarah Holl',
    slug: 'Sarah_Holl',
    email: 'sarah@gmail.com',
    // password: 'pwd123',
    loginType: 'email',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530582/politicl/o_zeno6i.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--RRzk62k9--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_zeno6i',
    // url: 'https://s3-media1.fl.yelpcdn.com/photo/IzKv7ZS0JpSxe0q8w5KskA/o.jpg',
    // uniqueId: 'bf080ec7-b72d-49bf-b0f0-0c00079c11f6',
    createdAt: '2017-10-09T06:29:31.864+0000',
    updatedAt: '2017-10-09T06:29:49.940+0000'
    // _p_listPhoto: 'Photo$1GCPjENOGQ'
  },
  {
    id: 'tiBfFJkC71',
    username: 'Cheryl Philly',
    slug: 'Cheryl_Philly',
    email: 'chery@gmail.com',
    // password: 'pwd123',
    loginType: 'email',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530609/politicl/o_ycidf6.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--gejTpksQ--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ycidf6',
    // url: 'https://s3-media2.fl.yelpcdn.com/photo/R9UP-zIqrSaGEgThqL0iaA/o.jpg',
    // uniqueId: '62a36ec4-cf3a-4d19-9da9-f70c92952a8a',
    createdAt: '2017-10-09T06:30:00.674+0000',
    updatedAt: '2017-10-09T06:30:12.743+0000'
    // _p_listPhoto: 'Photo$YUYoNwbZsG'
  },
  {
    id: 'clB85fmtwS',
    username: 'Nkechi Jim',
    slug: 'Nkechi_Jim',
    email: 'nkechi@gmail.com',
    // password: 'pwd123',
    loginType: 'email',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530628/politicl/o_luk1is.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--NfKNpKXg--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_luk1is',
    // url: 'https://s3-media2.fl.yelpcdn.com/photo/GgMX7ejFiTmIRe3wNwC-Cg/o.jpg',
    // uniqueId: 'c2f61bbd-76d5-4629-b268-ff7392392e27',
    createdAt: '2017-10-09T06:30:21.133+0000',
    updatedAt: '2017-10-09T06:30:33.410+0000'
    // _p_listPhoto: 'Photo$o6HA6Bzy0g'
  },
  {
    id: 'zis2vkx9G2',
    username: 'Jaron Lawrence',
    slug: 'Jaron_Lawrence',
    email: 'jaron@gmail.com',
    // password: 'pwd123',
    loginType: 'email',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507530533/politicl/o_zhkvq8.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--F_wZB3xc--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_zhkvq8',
    // url: 'https://s3-media3.fl.yelpcdn.com/photo/VnKMOfICpfPb1LMZbb9CyQ/o.jpg',
    // uniqueId: '193fd89e-214b-46ea-a8b6-6c7fa4376023',
    createdAt: '2017-10-09T06:28:45.788+0000',
    updatedAt: '2017-11-06T12:47:22.870+0000'
    // _p_listPhoto: 'Photo$hyAYe19i0F',
  },
  {
    id: 'LCTQTNNI28',
    username: 'yinhaixia',
    slug: 'yinhaixia',
    // uniqueId: '2492a91e-96b7-4295-9a22-2fc92417595f',
    email: 'yinhaixiadrop@gmail.com',
    // password: 'pwd123',
    loginType: 'email',
    createdAt: '2017-11-11T01:50:18.902+0000',
    updatedAt: '2017-11-11T01:50:19.411+0000'
  }
  // {
  //   id: 'W4Iqc2hYE5',
  //   username: 'trujunzhang',
  //   slug: 'trujunzhang',
  //   // uniqueId: '6c7de631-f02a-4955-98d7-caa5c7f3400f',
  //   email: 'trujunzhang@gmail.com',
  //   // password: 'pwd123',
  //   loginType: 'email',
  //   createdAt: '2017-10-19T06:36:51.415+0000',
  //   updatedAt: '2017-10-19T06:36:51.808+0000'
  // }
]
