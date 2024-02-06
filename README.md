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
    - Adding a form to Angular app
    - HTTP communication to ng app

### Note

- a standalone component refers to a self-contained and reusable unit of code that encapsulates logic, data, and UI elements, without relying on the traditional NgModule system for configuration and dependencies.
- `FormGroup` and `FormControl` are types that enable you to build forms. The `FormControl` type can provide a default value and shape the form data
- There is an @ prefix for the if because it is a special type of syntax called Angular template syntax
- Angular's HttpClient returns observables from HTTP method calls
- The `subscribe` method is a key element for working with Observables.
- `Observables` are a powerful pattern for dealing with `asynchronous` data streams
- A component in Angular has a life-cycle, a number of different phases it goes through from birth to death.

## SERVICES

- Angular services provide a way for you to separate Angular app data and functions that can be used by multiple components in your app.
- Dependency injection is the mechanism that manages the dependencies of an app's components and the services that other components can use.

## COMPONENTS LIFECYCLE

constructor

- This is invoked when Angular creates a component or directive by calling new on the class.
  ngOnChanges
  Invoked every time there is a change in one of th input properties of the component.

ngOnInit

- Invoked when given component has been initialized.
  This hook is only called once after the first ngOnChanges

ngDoCheck

- Invoked when the change detector of the given component is invoked. It allows us to implement our own change detection algorithm for the given component.
