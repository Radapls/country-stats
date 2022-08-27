export const api = {
    all: () => 'https://restcountries.com/v3.1/all',
    name: (name: string) => `https://restcountries.com/v3.1/name/${name}`,
    code: (code: string) => `https://restcountries.com/v3.1/alpha/${code}`,
    region: (region: string) => `https://restcountries.com/v3.1/alpha/${region}`
}