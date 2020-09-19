export declare class Users {
    static defaultLoginType: string;
    /**
     * Sometimes, If the users run the 'IEATTA' app, but network is unavailability.
     * So give the users the 'anonymous' user firstly to let them can use the app.
     *
     * The uniqueId and the password is the same as '12345654321'.
     *
     * @type {{id: null, name: string, slug: string, email: string, loginType: string, uniqueId: string}}
     */
    static anonymousUser: IParseModelUsers;
    static config: {
        dateFormat: string;
        orderedDataFormat: string;
        TYPE_EMAIL: number;
        TYPE_TWITTER: number;
        TYPE_FACEBOOK: number;
        TYPE_GOOGLE: number;
        TYPE_GITHUB: number;
        TYPE_LINKEDIN: number;
        TYPE_TITLES: string[];
    };
    static profileLeftMenus: {
        LOGGED_USER_INVITE_FORM: {
            tag: string;
            path: string;
        };
        LOGGED_USER_EDIT_FORM: {
            tag: string;
            path: string;
        };
        LOGGED_USER_MENU_ABOUT: {
            tag: string;
            title: string;
            svg: string;
            path: string;
        };
        LOGGED_USER_MENU_REVIEWS: {
            tag: string;
            title: string;
            svg: string;
            path: string;
        };
        LOGGED_USER_MENU_BROWSER_PHOTOS: {
            tag: string;
            title: string;
            svg: string;
            path: string;
        };
        LOGGED_USER_MENU_EVENTS: {
            tag: string;
            title: string;
            svg: string;
            path: string;
        };
        LOGGED_USER_MENU_RECIPES: {
            tag: string;
            title: string;
            svg: string;
            path: string;
        };
    };
    static isLoggedUser(userProfile: any, currentUser: any): boolean;
    /**
     * @summary Get a user's email hash
     * @param {Object} user
     */
    static getEmailHash(user: IParseModelUsers): string;
    static getCreatedAtFormat(user: any): string;
    static getOrderedUserFormat(peopleInEvent: any): string;
    static getInviteEmailObject(props: any): {
        size: number;
        emails: any;
    };
    static getSelectedUserIndex(newListTask: any, selectedPhotoInfo: any): {
        selectedUserIndex: number;
        selectedUserId: any;
    };
}
