import { ISocialAuthHelperGetFacebookSdkParams, ISocialAuthHelperGetTwitterOauthTokenUrlParams, ISocialAuthHelperGetTwitterRequestTokenUrlParams } from './socialAuthHelper.d';
export declare class SocialAuthHelper {
    static getFacebookSdk(params: ISocialAuthHelperGetFacebookSdkParams): string;
    static getTwitterOauthTokenUrl(params: ISocialAuthHelperGetTwitterOauthTokenUrlParams): string;
    static getTwitterRequestTokenUrl(params: ISocialAuthHelperGetTwitterRequestTokenUrlParams): string;
}
