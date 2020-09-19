export interface IParseDomain {
  tld: string
  domain: string
  subdomain: string
}

export type IParseDomainWithNull = IParseDomain | null
