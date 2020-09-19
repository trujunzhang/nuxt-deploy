import { parseDomain } from '../parse-domain'

describe('parseDomain(url)', () => {
  it('should remove the protocol', () => {
    expect(parseDomain('http://example.com')).toEqual({
      subdomain: '',
      domain: 'example',
      tld: 'com'
    })
    expect(parseDomain('https://example.com')).toEqual({
      subdomain: '',
      domain: 'example',
      tld: 'com'
    })
  })

  it('should remove sub-domains', () => {
    expect(parseDomain('www.example.com')).toEqual({
      subdomain: 'www',
      domain: 'example',
      tld: 'com'
    })
    expect(parseDomain('www.some.other.subdomain.example.com')).toEqual({
      subdomain: 'www.some.other.subdomain',
      domain: 'example',
      tld: 'com'
    })
  })

  it('should remove the path', () => {
    expect(parseDomain('example.com/some/path?and&query')).toEqual({
      subdomain: '',
      domain: 'example',
      tld: 'com'
    })
    expect(parseDomain('example.com/')).toEqual({
      subdomain: '',
      domain: 'example',
      tld: 'com'
    })
  })

  it('should remove the query string', () => {
    expect(parseDomain('example.com?and&query')).toEqual({
      subdomain: '',
      domain: 'example',
      tld: 'com'
    })
  })

  it('should remove special characters', () => {
    expect(parseDomain('http://m.example.com\r')).toEqual({
      subdomain: 'm',
      domain: 'example',
      tld: 'com'
    })
  })

  it('should remove the port', () => {
    expect(parseDomain('example.com:8080')).toEqual({
      subdomain: '',
      domain: 'example',
      tld: 'com'
    })
  })

  it('should remove the authentication', () => {
    expect(parseDomain('user:password@example.com')).toEqual({
      subdomain: '',
      domain: 'example',
      tld: 'com'
    })
  })

  it('should allow @ characters in the path', () => {
    expect(parseDomain('https://medium.com/@username/')).toEqual({
      subdomain: '',
      domain: 'medium',
      tld: 'com'
    })
  })

  it('should also work with three-level domains like .co.uk', () => {
    expect(parseDomain('www.example.co.uk')).toEqual({
      subdomain: 'www',
      domain: 'example',
      tld: 'co.uk'
    })
  })

  it('should not include private domains like blogspot.com by default', () => {
    expect(parseDomain('foo.blogspot.com')).toEqual({
      subdomain: 'foo',
      domain: 'blogspot',
      tld: 'com'
    })
  })

  it('should include private tlds', () => {
    expect(parseDomain('foo.blogspot.com', { privateTlds: true })).toEqual({
      subdomain: '',
      domain: 'foo',
      tld: 'blogspot.com'
    })
  })

  it('should work when all url parts are present', () => {
    expect(
      parseDomain(
        'https://user@www.some.other.subdomain.example.co.uk:8080/some/path?and&query#hash'
      )
    ).toEqual({
      subdomain: 'www.some.other.subdomain',
      domain: 'example',
      tld: 'co.uk'
    })
  })

  it('should also work with the minimum', () => {
    expect(parseDomain('example.com')).toEqual({
      subdomain: '',
      domain: 'example',
      tld: 'com'
    })
  })

  it('should return null if the given url contains an unsupported top-level domain', () => {
    expect(parseDomain('example.kk')).toEqual(null)
  })

  it('should return null if the given value is not a string', () => {
    expect(parseDomain(undefined)).toEqual(null)
    expect(parseDomain({})).toEqual(null)
    expect(parseDomain('')).toEqual(null)
  })

  it('should work with domains that could match multiple tlds', () => {
    expect(parseDomain('http://hello.de.ibm.com')).toEqual({
      subdomain: 'hello.de',
      domain: 'ibm',
      tld: 'com'
    })
  })

  it('should work with custom top-level domains (eg .local)', () => {
    function parseCustomTlds(url) {
      const options = {
        customTlds: ['local']
      }

      return parseDomain(url, options)
    }

    expect(parseDomain('mymachine.local')).toEqual(null)
    expect(parseDomain('mymachine.local', { customTlds: ['local'] })).toEqual({
      subdomain: '',
      domain: 'mymachine',
      tld: 'local'
    })
    expect(parseCustomTlds('mymachine.local')).toEqual({
      subdomain: '',
      domain: 'mymachine',
      tld: 'local'
    })
  })

  it('should behave itself when standard top-level domains sit atom custom top-level domains (eg .dev.local)', () => {
    expect(parseDomain('ohno.dev.local')).toEqual(null)
    expect(parseDomain('ohno.dev.local', { customTlds: ['local'] })).toEqual({
      subdomain: 'ohno',
      domain: 'dev',
      tld: 'local'
    })
    expect(parseDomain('dev.local', { customTlds: ['local'] })).toEqual({
      subdomain: '',
      domain: 'dev',
      tld: 'local'
    })
  })

  it('should also work with custom top-level domains (eg .local) passed as regexps', () => {
    expect(parseDomain('mymachine.local')).toEqual(null)
    expect(parseDomain('mymachine.local', { customTlds: /\.local$/ })).toEqual({
      subdomain: '',
      domain: 'mymachine',
      tld: 'local'
    })
  })

  it('should also work with custom hostnames (eg localhost) when passed as a regexp', () => {
    function parseLocalDomains(url) {
      const options = {
        customTlds: /localhost|\.local/
      }

      return parseDomain(url, options)
    }

    expect(parseDomain('localhost')).toEqual(null)
    expect(parseDomain('localhost', { customTlds: /localhost$/ })).toEqual({
      subdomain: '',
      domain: '',
      tld: 'localhost'
    })
    expect(parseLocalDomains('localhost')).toEqual({
      subdomain: '',
      domain: '',
      tld: 'localhost'
    })
    expect(parseLocalDomains('localhost:8080')).toEqual({
      subdomain: '',
      domain: '',
      tld: 'localhost'
    })
    expect(parseLocalDomains('mymachine.local')).toEqual({
      subdomain: '',
      domain: 'mymachine',
      tld: 'local'
    })
  })
})
