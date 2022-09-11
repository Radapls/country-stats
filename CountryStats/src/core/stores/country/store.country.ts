import { ErrorPayload } from 'src/core/services/error-handling.service';
import { Countries } from 'src/core/services/models/country.model';

export const storeTag: string = '[Country Store]';

export interface CountryStore
{
    loading: boolean;
    countries: Array<Countries>;
    error: ErrorPayload

}
