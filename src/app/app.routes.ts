import { Routes } from '@angular/router';
import { EntityTypes } from './entity-types/entity-types'

export const routes: Routes = [
    {
        path: 'entity-types',
        component: EntityTypes,
        title: 'Entity Types',
    }
];
