import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessoresGpService } from '../professores-gp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prof-gp-form',
  templateUrl: './prof-gp-form.component.html',
  styleUrls: ['./prof-gp-form.component.scss']
})
export class ProfGpFormComponent implements OnInit {

  meuForm : FormGroup = new FormGroup({});

  isEdicao : boolean = false;

  id : number = -1;

  constructor(
    private formBuilder: FormBuilder,
    private professoresGpService: ProfessoresGpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome : [ null, [ Validators.required ] ],
      email : [ null, [ Validators.required, Validators.email ] ]
    });

    this.activatedRoute.params
    .subscribe(
      (parametros: any) => {
        console.log(parametros);

        // é EDIÇÃO
        if (parametros.id){
          console.log(`Edição id ${parametros.id}`);

          this.isEdicao = true;
          this.id = parametros.id;

          // PRECISO consultar a API para buscar todas as informações do ID a ser editado

          this.professoresGpService.getOne(parametros.id)
            .subscribe(
              (dadosProfessoresGp) => {
                console.log(dadosProfessoresGp);
                // patchValue atualiza os campos do formulário de acordo com o nome dos controles
                this.meuForm.patchValue(dadosProfessoresGp);
              }
            );
        }
        // é CRIAÇÃO
        else {
          console.log(`criação`);
          this.isEdicao = false;
        }
      }
    );
}
  // 4-) integrar os controles do form no HTML
  Salvar(){
    //console.log(this.meuForm.value);
    // edicao igual a false significa que é criação
    if (this.isEdicao == false){
      this.professoresGpService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          // o navigate é para redirecionar para uma outra rota de interesse
          this.router.navigate(['/professores-gp']);
        }
      );
    } else{
      //é alteração de algum registro
      this.professoresGpService.update(this.id, this.meuForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            // o navigate é para redirecionar para uma outra rota de interesse
            this.router.navigate(['/professores-gp']);
          }
        );
    }

  }
}
