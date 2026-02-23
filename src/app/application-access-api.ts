import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { StringUniqueStringifier } from '../application-access-client/string-unique-stringifier'
import { AccessManagerClient } from '../application-access-client/access-manager-client';

/**
 * @name ApplicationAccessApi
 * @desc Service which interfaces to the ApplicationAccess API.
 */
@Injectable({
    providedIn: 'root',
})
export class ApplicationAccessApi {

    protected applicationAccessApiBaseUrl: string;
    protected accessManagerClient: AccessManagerClient<String, String, String, String>;

    /**
     * @desc Creates an ApplicationAccessApi.
     */
    constructor() {
        this.applicationAccessApiBaseUrl = environment.applicationAccessApiBaseUrl;
        // TODO: Exception handler around 'new URL()'
        this.accessManagerClient = new AccessManagerClient<String, String, String, String>(
            new URL(this.applicationAccessApiBaseUrl),
            new StringUniqueStringifier(),
            new StringUniqueStringifier(),
            new StringUniqueStringifier(),
            new StringUniqueStringifier()
        )
    }

    public async GetEntityTypes(): Promise<Array<string>> {

        return await this.accessManagerClient.GetEntityTypes();
    }
}
