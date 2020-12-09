import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpServeService } from 'src/app/shared/services/http-serve.service';
import { UtilsService } from 'src/app/shared/services/utils.service';


@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.scss']
})
export class BuscaCepComponent implements OnInit {

  cepForm: FormGroup;
  loadSpinner = false;
  cepArr = [];
  
  constructor(
    private http: HttpServeService,
    private formBuilder: FormBuilder,
    private util: UtilsService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.cepForm = this.formBuilder.group({
      cep: ['',[Validators.required, Validators.minLength(9)]]
    })

  }

  get cepFormControls(){
    return this.cepForm.controls;
  }

  getCep(){
    this.loadSpinner = true;
    let cep = this.cepForm.get('cep').value;
    
    this.http.getCep(cep).subscribe(
      result => {
        if(!result['erro']){
          this.cepArr.push({
            id: this.util.getRandom(),
            ...result,
            data: this.util.getDateTime()
          });
        }
        this.util.clearLocalStorage();
        this.util.setList(this.cepArr);
        this.buildForm();
        this.loadSpinner = false;
      },
      err => {
        this.loadSpinner = false;
      }
    )
  }

}
