# AutoMower

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Description of the project

Move an automower in a square surfaces using an input file. Mower's position is represented by coordinates (X,Y) and a characters indicate the orientation according to cardinal notations (N,E,W,S).
To control the mower, we send a simple sequence of characters. Possibles characters are L,R,F. L and R turn the mower at 90° on the left or right without moving the mower.
To program the mower, we can provide an input file constructed as follows:
The first line correspond to the coordinate of the upper right corner of the lawn (XY).
After that each mower has 2 next lines:
The first line give mower's starting position and orientation as "X Y O". 
The second line give instructions to the mower to go throughout the lawn.

## Run the project

  - Run `ng serve --open` or `ng serve` and navigate to `http://localhost:4200/`
  - Uplaod an input file with initial position and orientation of mowers
  - Click submit to start processing the file
  - See the result (new position and orientation of the mowers)
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
