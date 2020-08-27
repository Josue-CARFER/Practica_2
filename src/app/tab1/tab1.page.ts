import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dato1 = 0;
  suma1 = 0;
  suma2 = 0;
  utilidad = 0;

  constructor() {}
  calcularSuma() 
  {
    this.suma1 = this.dato1*(13/100);
    this.suma2 = this.dato1*(3/100);
    this.utilidad = this.dato1 - this.suma1 - this.suma2;
  }
  


}
