import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CEP } from 'cep-promise'
import { CepServiceService as CepService } from '../cep-service.service';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private _cepService: CepService,
    private _router: Router,
    private http: HttpClient) {}

  ngOnInit(
  ) {
    this._cepService.cep.subscribe(cepAtual => {
      this.cepData = cepAtual;
    });

    this.formatCepTemplate();
  }

  private formatCepTemplate() {
    const unformatedCep = this.cepData?.cep;
    
    if (!unformatedCep) {
      this.cep = '';
      return;
    }
    
    const formatedCep = unformatedCep.slice(0, 5) + '-' + unformatedCep.slice(5);
    
    this.cep = formatedCep;
  }

  async callCep(e: Event) {
    const cepValue = (e.target as HTMLInputElement).value;
    const cepParsed = Number(cepValue.replace('-', ''));
    
    this.http.get<CEP>(`https://brasilapi.com.br/api/cep/v1/${cepParsed}`).subscribe(
      resultado => {
        this._cepService.setCep(resultado);
      }
    );
    
    this._router.navigate(['/cep-info']);
  }
}
