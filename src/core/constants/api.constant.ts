export const api = {
    all: () => 'https://restcountries.com/v3.1/all',
    name: (name?: string) => `https://restcountries.com/v3.1/name/${name}`,
    region: (region: string) => `https://restcountries.com/v3.1/alpha/${region}`
}
