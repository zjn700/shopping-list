import { Component, OnInit } from '@angular/core';
//import { Foo } from '../../assets/js/import-js-test';
//import * as  Foo from '../../assets/js/import-js-test';
//declare var sayJello: any;
//let myFoo = (<any>Foo);
declare var test: any;
declare var test2: any;
declare var Foo: any;


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css', '../shared/bootstrap-3.3.7-dist/css/bootstrap.css']
})
export class ShoppingListComponent implements OnInit {
  private foo;

  constructor() { }

  ngOnInit() {
    //sayJello();
    //myFoo.foo.bar()
    this.f();
    this.foo.bar();
  }
  
  f(){
    new test();
    new test2();
    let foo = new Foo();
    this.foo = foo;
    foo.bar()
    
    
  }

}
