import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CEP } from 'cep-promise';
import { CepServiceService } from '../cep-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError } from 'rxjs/internal/operators/catchError';
import { AlertService } from '../alert-message/alert.service';
import { of, skip, throwError } from 'rxjs';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { PassThrough } from 'stream';

@Component({
  selector: 'app-cep-info',
  templateUrl: './cep-info.component.html',
  styleUrls: ['./cep-info.component.css']
})
export class CepInfoComponent implements OnInit {
  cepData: CEP;
  cepForm: FormGroup;
  
  private _canNavigate = false;
  
  constructor(private _cepService: CepServiceService, 
    private _http: HttpClient,
    private _router: Router,
    private _fb: FormBuilder,
    private _alertService: AlertService
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

    this._http.get<JSON>(`https://viacep.com.br/ws/${endereco.state}/${endereco.city}/json/`)
    .pipe(
      catchError(error => {
        this._alertService.error('Cep Não Encontrado');
        this._canNavigate = false;
        return throwError(() => { new Error('Cep Não Encontrado') });
      })
    )
    .subscribe(
      resultado => {
        const temp = resultado[0];

        if (!temp) {
          this._canNavigate = false;
        }
        else {
          this._canNavigate = true;
          
          
          this._cepService.setCep({
            cep: temp.cep,
            state: temp.uf,
            city: temp.localidade
          } as CEP);
        }
      }
    );
    
    if ( this._canNavigate ) {
      this._router.navigateByUrl('/cep-search');
    }
  }
}
