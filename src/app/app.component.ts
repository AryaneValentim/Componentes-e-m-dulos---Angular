import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-angular-2 kkk';
  empresa = 'NAVA';
  corFundo = 'background-color: purple';

  getColor(){
    let color : string = 'yellow';
    return color;
  }

  clicar (){
    alert("botao clicado")
  }

  getTextoDigitado(elemento : any){
    console.log(elemento.value)
    this.empresa = elemento.value;
  }
}
