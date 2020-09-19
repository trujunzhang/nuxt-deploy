export declare interface IServerHelper {
    getProjectRootPath(): string;
    resolve(path: string): string;
    getCloudPath(): string;
    getPublicPath(path: any): string;
    getStaticPath(path: any): string;
    getUploadFilesPath(path: any): string;
}
export declare class ServerHelper implements IServerHelper {
    private projectRootPath;
    constructor(appDirName: any);
    getProjectRootPath(): string;
    resolve(path: string): string;
    getCloudPath(): string;
    getPublicPath(path: any): any;
    getStaticPath(path: any): any;
    getUploadFilesPath(path: any): any;
}
