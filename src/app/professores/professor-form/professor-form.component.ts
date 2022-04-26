import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessoresService } from '../professores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.scss']
})
export class ProfessorFormComponent implements OnInit {

  // 1-) alocar a variável que vai ter os controles do form
  meuForm : FormGroup = new FormGroup({});

  // 2-) injetar o FormBuilder para poder ajudar a criar os controles do form
  constructor(
    private formBuilder: FormBuilder,
    private professoresService: ProfessoresService,
    private router:Router
    ) { }

  // 3-) alocar os controles na variável meuForm através do formBuilder
  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome : [ null, [ Validators.required ] ],
      rua : [ null, [ Validators.required ] ],
      numero : [ null, [ Validators.required ] ],
      cep : [ null, [ Validators.required ] ]
    });
  }
  // 4-) integrar os controles do form no HTML
  onSubmit(){
    console.log(this.meuForm.value);
    this.professoresService.save(this.meuForm.value)
    .subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/professores']);
      }
    );
  }
}
