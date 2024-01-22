import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: '<h1>{{title}}</h1>',
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class HelloWorldComponent {
  title = 'Hello Minh Phạm Welcome to Angular';
}
