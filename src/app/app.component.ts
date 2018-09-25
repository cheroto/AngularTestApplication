import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
            <h1>
                <div>{{pageTitle}}</div>
                <pm-dances></pm-dances>
            </h1>
            `
})
export class AppComponent {
  pageTitle: string = 'Latin Dance Styles';
}

