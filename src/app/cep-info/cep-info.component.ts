import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CEP } from 'cep-promise';
import { CepServiceService } from '../cep-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError } from 'rxjs/internal/operators/catchError';

@Component({
  selector: 'app-cep-info',
  templateUrl: './cep-info.component.html',
  styleUrls: ['./cep-info.component.css']
})
export class CepInfoComponent implements OnInit {
  cepData: CEP;
  cepForm: FormGroup;
  
  constructor(private _cepService: CepServiceService, 
    private http: HttpClient,
    private _router: Router,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this._cepService.cep.subscribe(cepAtual => {
      this.cepData = cepAtual;
    });

    this.cepForm = this._fb.group({
      city: '',
      state: ''
    })
  }

  async callCep() {
    const endereco = this.cepForm.value;

    this.http.get<JSON>(`https://viacep.com.br/ws/${endereco.state}/${endereco.city}/json/`)
    .subscribe(
      resultado => {
        const temp = resultado[0];

        this._cepService.setCep({
          cep: temp.cep,
          state: temp.uf,
          city: temp.localidade
        } as CEP);
      }
    );
    
    this._router.navigateByUrl('/cep-search');
  }
}
