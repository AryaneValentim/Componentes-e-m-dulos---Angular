import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessoresGpService } from '../professores-gp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prof-gp-form',
  templateUrl: './prof-gp-form.component.html',
  styleUrls: ['./prof-gp-form.component.scss']
})
export class ProfGpFormComponent implements OnInit {

  meuForm : FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private professoresGpService: ProfessoresGpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome : [ null, [ Validators.required ] ],
      email : [ null, [ Validators.required ] ]
    });
  }
  // 4-) integrar os controles do form no HTML
  onSubmit(){
    console.log(this.meuForm.value);
    this.professoresGpService.save(this.meuForm.value)
    .subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/professores']);
      }
    );
  }
}
