import { AvatarURISourceWithNull, IAvatarProps } from '@app/avatar';
export declare class AvatarUtils {
    private object;
    private avatarType;
    constructor(object: any, avatarType?: string | null);
    getAvatarProperties(avatarURISource: AvatarURISourceWithNull): IAvatarProps;
}
