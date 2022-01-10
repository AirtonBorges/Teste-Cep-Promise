import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slide } from './route-animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    slide
  ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
