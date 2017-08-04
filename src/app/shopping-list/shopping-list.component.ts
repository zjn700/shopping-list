import { Component, OnInit } from '@angular/core';
//import { Foo } from '../../assets/js/import-js-test';
//import * as  Foo from '../../assets/js/import-js-test';
//declare var sayJello: any;
//let myFoo = (<any>Foo);

declare var test: any;
declare var Foo: any;
declare var glossaryList: any;
declare var apple: any;


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css', '../shared/bootstrap-3.3.7-dist/css/bootstrap.css']
})
export class ShoppingListComponent implements OnInit {
  private foo;
  public glossary;

  constructor() { }

  ngOnInit() {
    //sayJello();
    //myFoo.foo.bar()
    this.f();
    console.log('assigned foo.bar')
    this.foo.bar();
    // console.log('this.glossary')
    // alert(this.glossary)
    
  }
  
  f(){
    
    // see assets/js/import-js-test: all these ways work...apple is probably the most useful
    // but glossaryTest is just an array that can be imported this way
    let myTest = test;
    myTest()
    test()
    
    console.log(apple.getInfo())
    console.log('doubleIt ' + apple.doubleIt(15))

    let foo = new Foo;
    this.foo = foo;
    foo.bar()
    
    let glossary = glossaryList
    console.log('glossary')
    console.log(glossary)
    for (let item of glossary){
      console.log(item.term)
      console.log(item.definition)
    }
    console.log('done')
    
    
  }

}
