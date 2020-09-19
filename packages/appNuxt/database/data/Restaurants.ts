// import { GeoHashUtils } from '@app/tools'
import { IFBRestaurant } from 'ieattatypes'
import { slugifyToLower } from '~/database/slug_helper'

export const loadRestaurants = (): IFBRestaurant[] => {
  const next = restaurants.map((item: IFBRestaurant) => {
    // const geoHash = GeoHashUtils.encode(item.latitude, item.longitude)
    // item.geoHash = geoHash
    item.slug = slugifyToLower(item.displayName)
    // console.log(JSON.stringify(item))
    return item
  })
  // console.log(JSON.stringify(next))
  return next
}

export const restaurants: IFBRestaurant[] =
  [{
    isNew: false,
    uniqueId: '035ac47c-5781-4da8-af21-35c97a46c101',
    extraNote: '',
    creatorId: '',
    flag: '1',
    address: '724 S Broadway, Los Angeles, CA 90014, USA',
    displayName: 'Forno Vecchio',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529261/politicl/o_xr3usf.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--qsTnagxL--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_xr3usf',
    geoHash: 'hb00n8n2pb08',
    latitude: 34.044561,
    longitude: -118.253985,
    createdAt: '2017-10-09T06:02:09.838+0000',
    updatedAt: '2017-11-07T07:43:10.690+0000',
    rate: 3.5,
    reviewCount: 12,
    street_number: '724',
    route: 'South Broadway',
    locality: 'Los Angeles',
    sublocality: '',
    country: 'US',
    postal_code: '2802',
    administrative_area: 'CA',
    slug: 'forno-vecchio'
  }, {
    isNew: false,
    uniqueId: '0b92b483-8860-438b-961d-4fef4b124176',
    extraNote: '',
    creatorId: '',
    flag: '1',
    address: '250s S Broadway, Los Angeles, CA 90012, USA',
    displayName: 'Carl\'s Jr',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529311/politicl/o_ugrhuw.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--TqIOho75--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ugrhuw',
    geoHash: 'hb00nb521bn8',
    latitude: 34.051178,
    longitude: -118.247636,
    createdAt: '2017-10-09T06:02:52.325+0000',
    updatedAt: '2017-10-09T06:35:46.537+0000',
    rate: 2.5,
    reviewCount: 3,
    street_number: '250s',
    route: 'South Broadway',
    locality: 'Los Angeles',
    sublocality: '',
    country: 'US',
    postal_code: '3605',
    administrative_area: 'CA',
    slug: 'carl\'s-jr'
  }, {
    isNew: false,
    uniqueId: 'f603f752-5641-472d-bcd1-0dec921b8931',
    extraNote: '',
    creatorId: '',
    flag: '1',
    address: '336 S Hill St, Los Angeles, CA 90013, USA',
    displayName: 'La Cita',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529351/politicl/o_h1fei1.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--r05hgf5R--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_h1fei1',
    geoHash: 'hb00nb521bn8',
    latitude: 34.050796,
    longitude: -118.249782,
    createdAt: '2017-10-09T06:03:49.167+0000',
    updatedAt: '2017-10-09T06:36:46.436+0000',
    rate: 2.0,
    reviewCount: 15,
    street_number: '336',
    route: 'South Hill Street',
    locality: 'Los Angeles',
    sublocality: '',
    country: 'US',
    postal_code: '1109',
    administrative_area: 'CA',
    slug: 'la-cita'
  }, {
    isNew: false,
    uniqueId: '0423ce1f-34c5-405a-9b7a-22202046ee68',
    extraNote: '',
    creatorId: '',
    flag: '1',
    address: '401 S Grand Ave, Los Angeles, CA 90071, USA',
    displayName: 'Pez Cantina',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529398/politicl/o_npi8ev.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--pdqw12x3--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_npi8ev',
    geoHash: 'hb00nb584012',
    latitude: 34.051525,
    longitude: -118.253312,
    createdAt: '2017-10-09T06:04:35.361+0000',
    updatedAt: '2017-10-09T06:37:45.146+0000',
    rate: 4.0,
    reviewCount: 8,
    street_number: '401',
    route: 'South Grand Avenue',
    locality: 'Los Angeles',
    sublocality: '',
    country: 'US',
    postal_code: '90071',
    administrative_area: 'CA',
    slug: 'pez-cantina'
  }, {
    isNew: false,
    uniqueId: 'e854bd77-7836-4244-8b17-f7b2ec5e910a',
    extraNote: '',
    creatorId: '',
    flag: '1',
    address: '517 W 6th St, Los Angeles, CA 90014, USA',
    displayName: 'Water Grill',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507529446/politicl/o_ygnkam.jpg',
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--sX0P-dsK--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/o_ygnkam',
    geoHash: 'hb00nb1b18n2',
    latitude: 34.049107,
    longitude: -118.254707,
    createdAt: '2017-10-09T06:05:13.322+0000',
    updatedAt: '2017-10-09T06:39:17.107+0000',
    rate: 1.0,
    reviewCount: 20,
    street_number: '517',
    route: 'West 6th Street',
    locality: 'Los Angeles',
    sublocality: '',
    country: 'US',
    postal_code: '1201',
    administrative_area: 'CA',
    slug: 'water-grill'
  }, {
    isNew: false,
    uniqueId: 'f1c0aff9-728b-4041-9560-c09578ce7b01',
    extraNote: '',
    creatorId: '',
    flag: '1',
    geoHash: 'uxzpcrfzypbp',
    latitude: 32.402716,
    longitude: 120.550209,
    displayName: 'trujunzhang locally',
    createdAt: '2017-10-10T06:05:35.316+0000',
    updatedAt: '2017-10-10T06:05:35.633+0000',
    rate: 1.5,
    reviewCount: 4,
    thumbnailUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/s--zE0P3i_b--/c_fill,f_auto,h_348,q_auto,w_348/v1/politicl/b2eccd155ad6639c29e51f9b0d2549f6_image_bjvqag',
    originalUrl: 'http://res.cloudinary.com/di3fvexj8/image/upload/v1507615599/politicl/b2eccd155ad6639c29e51f9b0d2549f6_image_bjvqag.jpg',
    address: '399 Ren Shou Lu, Rugao Shi, Nantong Shi, Jiangsu Sheng, China, 226500',
    street_number: '399',
    route: 'Ren Shou Lu',
    locality: 'Nantong Shi',
    sublocality: 'Rugao Shi',
    country: 'CN',
    postal_code: '226500',
    administrative_area: 'Jiangsu Sheng',
    slug: 'trujunzhang-locally'
  }]
