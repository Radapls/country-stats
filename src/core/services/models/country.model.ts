export type Countries = CountryBase & Partial<Name> & Partial<Flags> & Partial<CoatOfArms> & Partial<Languages> & Partial<Currency>;


export interface CountryBase
{
    name: Name;
    tdl: Array<string>;
    cca2: string;
    cnn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currency;
    idd: Array<string>;
    capital: string;
    altSpellings: Array<string>;
    region: string;
    subregion: string;
    translate: Array<string>;
    latLng: Array<string>;
    landlocked: boolean;
    languages: Array<string>;
    borders: Array<string>;
    area: number;
    demonyms: Array<string>;
    flag: string;
    maps: Array<string>;
    gini: Array<string>;
    population: number;
    fifa: string;
    car: Array<string>;
    timeZone: Array<string>;
    continent: Array<string>;
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: Array<string>;
    postalCode: Array<string>;
}

export interface CountriesResponse
{
    name: string;
    currency: string;
    region: string;
    location: LatLng;
    icon: string;
    area: number;
    flag: string;
    escudo: string;
}

export interface LatLng
{
    lat: string;
    lng: string;
}

export interface Name extends CountryBase
{
    common: string;
    official: string;
    nativeName: Languages
}

export interface Flags extends CountryBase
{
    png: string;
    svg: string;
}

export interface CoatOfArms extends CountryBase
{
    png: string;
    svg: string;
}

export interface Languages
{
    spa: string;
    ber: string;
    bey: string;
    por: string;
}

export interface Currency extends CountryBase
{
    currency: string;
    symbol: string;
}
