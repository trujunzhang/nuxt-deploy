export declare class ReducerHelper {
    static getSignInParameter({ authModel }: {
        authModel: any;
    }): ISignInParameter;
    static getSignUpParameter({ authModel }: {
        authModel: any;
    }, needEmailVerification: any): ISignUpParameter;
    static getForgotPasswordParameter({ authModel }: {
        authModel: any;
    }): IForgotPasswordParameter;
    static getTableQuery({ editModel }: {
        editModel: any;
    }): IEditModelQueryProps;
    static getTableDateSelectors({ editModel }: {
        editModel: any;
    }): string;
    static getTableSearch({ editModel }: {
        editModel: any;
    }): string;
    static getTableStatus({ editModel }: {
        editModel: any;
    }): string;
    static getTableLoginType({ editModel }: {
        editModel: any;
    }): string;
    static getTableSelectedRowId({ editModel }: {
        editModel: any;
    }): any;
    static isOrderDesc({ editModel }: {
        editModel: any;
    }, columnTag: string): boolean;
    static getTablePaginationIndex({ editModel }: {
        editModel: any;
    }): number;
    static getTableSelectAction({ editModel }: {
        editModel: any;
    }): any;
    static getCountPerPage({ editModel }: {
        editModel: any;
    }): any;
    static editModelDisabled({ editModel }: {
        editModel: any;
    }): any;
    static checkDiffCountPerPage({ editModel }: {
        editModel: any;
    }, { limit }: {
        limit: any;
    }): boolean;
    static getUniqueIdFromEditModel({ editModel }: {
        editModel: any;
    }): string;
    static getOriginModelFromEditModel({ editModel }: {
        editModel: any;
    }): string;
    static hasWidgetWelcomeScreenHidden({ authSession }: {
        authSession: any;
    }): boolean;
    static getAuthModelField({ authModel }: {
        authModel: any;
    }): any;
    static authModelDisabled({ authModel }: {
        authModel: any;
    }): any;
    static getSocialConnectedError({ authModel }: {
        authModel: any;
    }): any;
    static getAuthModelAlert({ authModel }: {
        authModel: any;
    }): any;
    static getLocation({ editModel }: {
        editModel: any;
    }): any[];
    static isNewModelFormPage({ editModel }: {
        editModel: any;
    }): boolean;
    static getEditModelType({ editModel }: {
        editModel: any;
    }): any;
    static getNextRestaurantModel({ editModel }: {
        editModel: any;
    }): {
        parseId: any;
        uniqueId: any;
        displayName: any;
        latitude: any;
        longitude: any;
        address: any;
        street_number: any;
        route: any;
        locality: any;
        sublocality: any;
        country: any;
        postal_code: any;
        administrative_area: any;
    };
}
