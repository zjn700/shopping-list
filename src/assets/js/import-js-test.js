function test(){
    console.log('TestingFunction')
}

function test2(){
    console.log('TestingFunction2')
  
}

var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
    this.doubleIt = function(thisNumber) {
      return thisNumber * 2
    }
}

var Foo2 = new function() {
    this.type = "foo";
    this.color = "red";
    this.bar = function () {
        console.log('bar')
        return this.color + ' ' + this.type + ' apple';
    };
}

class Foo {

  bar() {
    console.log('bar');
  }
}
  
    
var  boo = function () {
    console.log('boo')
  }
  
  

  
//   sayJello(){
//     console.log('jello')
//   }
// }
// exports.Foo = Foo;




//console.log('jello import-js-test')