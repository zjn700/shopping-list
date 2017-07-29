import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css',  '../shared/bootstrap-3.3.7-dist/css/bootstrap.css']
})
export class MainPageComponent implements OnInit {
  //public fruits = ['Apple Unfortunately, the “Winery” part of the logo is white and therefore not ideal for printing on light-colored paper. That’s why two versions of the logo are in the source code, one for screen display, one for printing. The latter image has no alt text, otherwise screen readers would repeat reading out “Smashing Winery.”Unfortunately, the “Winery” part of the logo is white and therefore not ideal for printing on light-colored paper. That’s why two versions of the logo are in the source code, one for screen display, one for printing. The latter image has no alt text, otherwise screen readers would repeat reading out “Smashing Winery.” Unfortunately, the “Winery” part of the logo is white and therefore not ideal for printing on light-colored paper. That’s why two versions of the logo are in the source code, one for screen display, one for printing. The latter image has no alt text, otherwise screen readers would repeat reading out “Smashing Winery.”Unfortunately, the “Winery” part of the logo is white and therefore not ideal for printing on light-colored paper. That’s why two versions of the logo are in the source code, one for screen display, one for printing. The latter image has no alt text, otherwise screen readers would repeat reading out “Smashing Winery.”Unfortunately, the “Winery” part of the logo is white and therefore not ideal for printing on light-colored paper. That’s why two versions of the logo are in the source code, one for screen display, one for printing. The latter image has no alt text, otherwise screen readers would repeat reading out “Smashing Winery.Unfortunately, the “Winery” part of the logo is white and therefore not ideal for printing on light-colored paper. That’s why two versions of the logo are in the source code, one for screen display, one for printing. The latter image has no alt text, otherwise screen readers would repeat reading out “Smashing Winery.Unfortunately, the “Winery” part of the logo is white and therefore not ideal for printing on light-colored paper. That’s why two versions of the logo are in the source code, one for screen display, one for printing. The latter image has no alt text, otherwise screen readers would repeat reading out “Smashing Winery.Unfortunately, the “Winery” part of the logo is white and therefore not ideal for printing on light-colored paper. That’s why two versions of the logo are in the source code, one for screen display, one for printing. The latter image has no alt text, otherwise screen readers would repeat reading out “Smashing Winery.Unfortunately, the “Winery” part of the logo is white and therefore not ideal for printing on light-colored paper. That’s why two versions of the logo are in the source code, one for screen display, one for printing. The latter image has no alt text, otherwise screen readers would repeat reading out “Smashing Winery.Unfortunately, the “Winery” part of the logo is white and therefore not ideal for printing on light-colored paper. That’s why two versions of the logo are in the source code, one for screen display, one for printing. The latter image has no alt text, otherwise screen readers would repeat reading out “Smashing Winery. ', 'Banana', 'Orange']
  public fruits = ['Apple', 'Banana', 'Orange']
  public items = [1,2, 3, 4, 5, 6, 7]
  public loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet nisi non eros feugiat bibendum vel ac leo. Proin venenatis nulla a metus efficitur ullamcorper. Duis egestas faucibus libero, nec consequat tortor faucibus at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet luctus odio. Morbi posuere lorem arcu, ac consectetur mauris posuere non. Nulla eleifend libero sit amet urna aliquam, sed luctus felis dapibus. Proin rutrum, massa et fringilla laoreet, ipsum augue placerat turpis, non interdum lectus ante vitae augue. Nulla vel nulla velit. Vivamus vulputate, est vitae ultrices dictum, sapien erat auctor ligula, viverra rutrum turpis quam luctus ipsum. Suspendisse rhoncus neque urna, id mattis erat fringilla quis."
  constructor() { }

  ngOnInit() {
    
    
  }

  checkCharacterCount(index) {
    if ((this.loremipsum.length * index) < 2200) {
      return true
    }
    return false;
  }
  
}
