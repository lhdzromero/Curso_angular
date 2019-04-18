import {Routes, RouterModule} from '@angular/router';

// Components
import { PaisesComponent } from './components/paises.component';
import { CiudadesComponent } from './components/ciudades.component';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full', // default
        redirectTo: '/paises'
    },
    { path: 'paises', component: PaisesComponent },
    { path: 'ciudades', component: CiudadesComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
