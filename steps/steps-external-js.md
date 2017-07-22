// https://stackoverflow.com/questions/37081943/angular2-import-external-js-file-into-componentt

After wasting a lot of time in finding its solution, I've found one. For your convenience I've used the complete code that you can replace your whole file with.

This is a general answer. Let's say you want to import a file named testjs.js into your angular 2 component. Create testjs.js in your assets folder:

assets > testjs.js

function test(){
    alert('TestingFunction')
}
include testjs.js in your index.html

index.html

<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Project1</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <script src="./assets/testjs.js"></script>

</head>
<body>
  <app-root>Loading...</app-root>
</body>
</html>
In your app.component.ts or in any component.ts file where you want to call this js declare a variable and call the function like below:

app.component.ts

import { Component } from '@angular/core';

declare var test: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';


  f(){
    new test();
  }
}
Finally in your app.component.html test the function

app.component.html

<h1>
  <button (click)='f()'>Test</button>
</h1>