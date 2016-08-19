import { Routes, RouterModule } from '@angular/router';

import { BuildCaseInputComponent } from './buildCase/buildCaseInput.componet'

const appRoutes: Routes = [
    { path: '', component: BuildCaseInputComponent },
    { path: 'buildcaseinput', component: BuildCaseInputComponent },
    { path: '**', component: BuildCaseInputComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
