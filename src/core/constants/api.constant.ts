const FIELDS = 'fields=name,flags,population,region,capital,subregion,tld,currencies,languages,borders';

export const api = {
    all: () => `https://restcountries.com/v3.1/all?${FIELDS}`,
    name: (name: string) => `https://restcountries.com/v3.1/name/${name}`,
    region: (region: string) => `https://restcountries.com/v3.1/region/${region}`,
    code: (code: string) => `https://restcountries.com/v3.1/alpha/${code}`
}
