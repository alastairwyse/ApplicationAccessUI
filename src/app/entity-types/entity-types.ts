import { Component } from '@angular/core';
import { ApplicationAccessApi } from '../application-access-api'

@Component({
    selector: 'app-entity-types',
    imports: [],
    templateUrl: './entity-types.html',
    styleUrl: './entity-types.css',
})
export class EntityTypes {

    constructor(private applicationAccessApi: ApplicationAccessApi) {

    }

    // #region Lifecycle Methods

    public async ngOnInit(): Promise<void> {
        
        let result: Array<String> = await this.applicationAccessApi.GetEntityTypes();
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }

        return Promise.resolve();
    }

    // #endregion
}
