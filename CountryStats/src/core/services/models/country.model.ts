export type Countries = CountryBase & Partial<Name> & Partial<Flags> & Partial<CoatOfArms> & Partial<Currencies>;


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
    currencies: Array<Currencies>;
    idd: Array<string>;
    capital: string;
    altSpellings: Array<string>;
    region: string;
    subregion: string;
    translate: Array<string>;
    latLng: Array<string>;
    landlocked: boolean;
    borders: Array<string>;
    area: number;
    demonyms: Array<string>;
    flag: string;
    maps: Array<string>;
    gini: Array<string>;
    population: string;
    fifa: string;
    car: Array<string>;
    timeZone: Array<string>;
    continent: Array<string>;
    flags: Flags;
    coatOfArms: Array<CoatOfArms>;
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
    nativeName: Array<Array<string>>;
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

export interface Currencies extends CountryBase
{
    PEN: Array<string>;
}