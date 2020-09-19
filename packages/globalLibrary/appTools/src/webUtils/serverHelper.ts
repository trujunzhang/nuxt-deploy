export declare interface IServerHelper {
  getProjectRootPath(): string
  resolve(path: string): string
  getCloudPath(): string
  getPublicPath(path: any): string
  getStaticPath(path: any): string
  getUploadFilesPath(path: any): string
}

export class ServerHelper implements IServerHelper {
  private projectRootPath: string

  constructor(appDirName) {
    this.projectRootPath = appDirName.replace('/production-server', '')

    console.log('')
    console.log('dirname: ', appDirName)
    console.log('projectRootPath: ', this.projectRootPath)
    console.log('')
  }

  getProjectRootPath() {
    return this.projectRootPath
  }

  resolve(path: string) {
    return this.projectRootPath + '/' + path
  }

  getCloudPath() {
    return this.projectRootPath + '/production-cloud/main.js'
  }

  getPublicPath(path: any) {
    return path.join(this.projectRootPath, 'public')
  }
  getStaticPath(path: any) {
    return path.join(this.projectRootPath, 'static')
  }
  getUploadFilesPath(path: any) {
    return path.join(this.projectRootPath, 'uploads')
  }
}
