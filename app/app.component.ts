import { Component }         from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import { Operator } from 'rxjs';

@Component({
    selector: 'my-app',
    template: `
    <hero-list></hero-list>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
