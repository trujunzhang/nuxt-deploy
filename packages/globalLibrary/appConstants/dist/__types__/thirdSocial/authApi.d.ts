declare const facebookConfig: {
    facebook_appId: string;
    facebook_secret: string;
    fields: string;
    facebook_callbackURL: string;
    profileURL: string;
    profileFields: string[];
};
declare const twitterConfig: {
    consumerKey: string;
    consumerSecret: string;
};
declare let twitterServerConfigure: {
    loginUrl: string;
    requestTokenUrl: string;
};
export { facebookConfig, twitterConfig, twitterServerConfigure };
