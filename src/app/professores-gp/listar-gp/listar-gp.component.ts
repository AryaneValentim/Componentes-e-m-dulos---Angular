import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessoresGpService } from '../professores-gp.service';

@Component({
  selector: 'app-listar-gp',
  templateUrl: './listar-gp.component.html',
  styleUrls: ['./listar-gp.component.scss']
})
export class ListarGpComponent implements OnInit {

  professoresGp : any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private professoresGpService: ProfessoresGpService
  ) { }

  ngOnInit(): void {

    this.professoresGpService.getAll()
      .subscribe(
        (data) => {
          console.log(data);
          this.professoresGp = data;
        }
      );

    this.activatedRoute.params.subscribe(
      (data) => {
        console.log(data);
      }
    );

  }

}
