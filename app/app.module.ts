import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { BuildCaseData } from './common/buildCaseData';
import { AppComponent }  from './app.component';

import { BuildCaseInputComponent }        from './buildCase/buildCaseInput.componet';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [
        { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
        { provide: SEED_DATA,  useClass: BuildCaseData },                // in-mem server data
        appRoutingProviders
    ],
    declarations: [
        AppComponent,
        BuildCaseInputComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
