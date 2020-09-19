export class BaseAfter {
  // private request: any;
  // private response: any;
  private parseClass: string

  constructor(parseClass) {
    // this.request = request;
    // this.response = response;
    this.parseClass = parseClass
  }

  getParseClass() {
    return this.parseClass
  }

  // tslint:disable-next-line:variable-name
  handler(_request) {}
}
