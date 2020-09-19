export class BaseDefine {
  // private request: any;
  // private response: any;
  private functionName: string

  constructor(functionName) {
    // this.request = request;
    // this.response = response;
    this.functionName = functionName
  }

  getFunctionName() {
    return this.functionName
  }

  // tslint:disable-next-line:variable-name
  handler(_request) {}
}
