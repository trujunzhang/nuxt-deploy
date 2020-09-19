import {IFBPhoto, IFBPhotoUpdateStatus} from 'ieattatypes'

export enum IFBPhotoStatus {
    offline_unknown = 'offline_unknown',
    offline_match = 'offline_match',
    online_unknown = 'online_unknown',
    online_match = 'online_match'
}

export class ParseModelPhotos {

    static updateStatus(photoData: IFBPhoto): IFBPhotoUpdateStatus {
        if (photoData.status === IFBPhotoStatus.offline_unknown) {
            console.log('photos:onCreate, offline_unknown, [[[lastValue]]]=', JSON.stringify(photoData.status));
            return {
                status: 'online_unknown'
            } as any
        }
        if (photoData.status === IFBPhotoStatus.offline_match) {
            console.log('photos:onCreate, offline_match, [[[lastValue]]]=', JSON.stringify(photoData.status));
            return {
                status: 'online_match'
            } as any
        }
        return {
            status: photoData.status
        }
    }
}