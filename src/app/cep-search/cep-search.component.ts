import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CEP } from 'cep-promise'
import { CepServiceService as CepService } from '../cep-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.css'],
})
export class CepSearchComponent implements OnInit {
  cepMask = '00000-000';
  text = '';
  cepData: CEP;
  cep = '';
  cepForm: FormGroup;

  constructor(
    private _cepService: CepService,
    private _router: Router,
    private _http: HttpClient,
    private _fb: FormBuilder
  ) {}

  ngOnInit(
  ) {
    this._cepService.cep.subscribe(cepAtual => {
      this.cepData = cepAtual;
    });

    this.formatCepTemplate();

    this.cepForm = this._fb.group({
      cep: ''
    })
  }

  private formatCepTemplate() {
    const CepFromData = this.cepData?.cep;
    
    if (!CepFromData) {
      this.cep = '';
      return;
    }
    
    if (!CepFromData.match('00000000')) {
      this.cep = CepFromData;
      return;
    }

    const formatedCep = CepFromData.slice(0, 5) + '-' + CepFromData.slice(5);
    
    this.cep = formatedCep;
  }

  async callCep() {
    const cepValue = this.cepForm.value.cep;
    console.log(cepValue);
    
    const cepParsed = Number(cepValue.replace('-', ''));
    
    this._http.get<CEP>(`https://brasilapi.com.br/api/cep/v1/${cepParsed}`).subscribe(
      resultado => {
        this._cepService.setCep(resultado);
      }
    );
    
    this._router.navigateByUrl('/cep-info');
  }
}
