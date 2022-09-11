import { ErrorPayload } from 'src/core/services/error-handling.service';
import { Countries, Flags } from 'src/core/services/models/country.model';

export const storeTag: string = '[Countries Store]';

export interface CountriesStore
{
    loading: boolean;
    countries: Array<Countries>;
    error: ErrorPayload;
    flags: Array<Flags>;

}
