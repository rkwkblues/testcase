import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './common/inMemoryData.service';
import { AppComponent }  from './app.component';
import { TestCaseService }          from './common/testCase.service';
import { BuildCaseInputComponent } from './buildCase/buildCaseInput.componet';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    providers: [
        { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
        { provide: SEED_DATA,  useClass: InMemoryDataService },          // in-mem server data
        TestCaseService
    ],
    declarations: [
        AppComponent,
        BuildCaseInputComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
