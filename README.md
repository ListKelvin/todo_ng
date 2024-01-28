# TodoNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Learning Stuff:

    - Print component hello world
    - create Home component
    - create housing location component (custom component)
    - Interfaces are custom data types for your app.
    - Input of an housing component
    - validate of an component
    - Add dynamic value to template
    - `ngFor` directive in Angular templates in order to display dynamically repeated data in a template.
      - A structural directive that renders a template for each item in a collection. The directive is placed on an element, which becomes the parent of the cloned templates.
      - Syntax: `<li *ngFor="let user of users; index as i; first as isFirst">  {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span></li>`
    - The `routerLink` directive enables Angular's router to create dynamic links in the application.

## SERVICES

- Angular services provide a way for you to separate Angular app data and functions that can be used by multiple components in your app.
- Dependency injection is the mechanism that manages the dependencies of an app's components and the services that other components can use.
