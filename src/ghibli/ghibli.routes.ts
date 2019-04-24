import { GhibliModule } from './ghibli.module';
import { Routes } from 'nest-router/routes.interface';

export const GHIBLI_ROUTES: Routes = [
    {
        path: '/ghibli-films',
        module: GhibliModule,
    },
];
