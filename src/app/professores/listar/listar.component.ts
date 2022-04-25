import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  @Input()
  empresaFilho: string = '';

  professores = [
    { id : 1, nome: "Fabrizio", email: "fabrizio@grandeporte.com.br" },
    { id : 2, nome: "Nelson", email: "nelson@grandeporte.com.br" }
  ];

  //private activatedRoute : activatedRoute
  //modificador de acesso, nome da varivável e classe do objeto a ser injetado
  constructor(private activedRoute: ActivatedRoute) { }
  //this.activatedRoute = new ActivatedROute();

  ngOnInit(): void {
    this.activedRoute.params.subscribe((data) => {
      console.log(data);
    });
  }

}
