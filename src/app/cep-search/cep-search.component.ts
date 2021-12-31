import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CEP } from 'cep-promise'
import { CepServiceService } from '../cep-service.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Component({
  selector: 'cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.css'],
})
export class CepSearchComponent implements OnInit {
  cepMask = '00000-000';
  text = '';
  cepData: CEP;

  constructor(
    private _cepService: CepServiceService,
    private _router: Router,
    private http: HttpClient) {}

  ngOnInit() {}

  async callCep(e: Event) {
    const cepValue = (e.target as HTMLInputElement).value;
    const cepParsed = Number(cepValue.replace('-', ''));
    
    this.http.get<CEP>(`https://brasilapi.com.br/api/cep/v1/${cepParsed}`).subscribe(
      resultado => {
        this._cepService.setCep(resultado);
      }
    );

    console.log(this._cepService.getCep());
    
    
    this._router.navigate(['/cep-info']);
  }
}
