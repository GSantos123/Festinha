import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qtdAdultos: number  ;
  qtdCriancas: number  ;
  totalSalgadinho: number  ;
  totalRefrigerante: number  ;
  totalBolo: number   ;

  constructor() { }

  calcular() {
    this.totalSalgadinho = this.qtdAdultos * 10 + this.qtdCriancas * 7;
    this.totalRefrigerante = (this.qtdAdultos * 400 + this.qtdCriancas * 300)/1000;
    this.totalBolo = (this.qtdAdultos *100+ this.qtdCriancas*100)/1000;

  }
  limpar(){
    this.totalSalgadinho = 0;
    this.totalRefrigerante = 0;
    this.totalBolo = 0;
    this.calcular();
  }

  
}
