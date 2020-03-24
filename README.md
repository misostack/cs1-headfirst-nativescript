# Nativescript App Architecture

> Todo
> - [x] General App Structure and Architecture
> - [x] Stylesheet
> - [x] Assets : Images, JSON, ...
> - [x] Routing and lazy load
> - [x] AppState
> - [x] I18n : https://www.npmjs.com/package/nativescript-localize --> translated text will be generated and stored in app resource but it doesn't support hot reload for development
> - [ ] I18n : custom pipe and direct import from lang constant --> support hot reload for development, does not suppot built-in text in app resource, and translation.
> - [ ] Example Shared Components, Pipes
> - [ ] ExampleModule

> **AppState**

```javascript
export interface AuthState {
  token: string;  
}

export interface UserState {
  id: string;
  firstName: string;
  lastName: string;
}

export interface AppStates {
  name: string;
  debug: boolean;
  version: number;
  auth: AuthState;
  user: UserState;
}
```

## Refs

- https://dev.to/angular/how-to-avoid-observables-in-angular-273h?utm_source=additional_box&utm_medium=internal&utm_campaign=regular&booster_org=angular
- https://dev.to/bitovi/testing-loading-states-using-rxjs-operators-2o9d?utm_source=additional_box&utm_medium=internal&utm_campaign=regular&booster_org=bitovi
- https://dev.to/avatsaev/simple-state-management-in-angular-with-only-services-and-rxjs-41p8
- https://blog.angulartraining.com/tutorial-state-management-with-observable-store-services-5ba53d87ad94
- https://ngrx.io/guide/store
- https://github.com/NativeScript/sample-Groceries/tree/master/app/login
- https://libraries.io/github/nea/nativescript-realworld-example-app

## CLI

- https://www.nativescript.org/blog/the-future-of-building-nativescript-apps

## Architecture

### Infrastructure Module ( Core )

### Base Module ( App Module )

#### Styles

- https://docs.nativescript.org/ui/styling#application-wide-css

#### Fonts

- https://docs.nativescript.org/ui/styling#custom-fonts

### Feature Modules

# Resources


- Font with nativescript : https://dzone.com/articles/using-custom-fonts-in-a-nativescript-app

- Font : https://www.fontsquirrel.com/fonts/roboto
