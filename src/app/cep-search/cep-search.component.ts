import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import cep, { CEP } from 'cep-promise';
import { CepServiceService } from '../cep-service.service';

@Component({
  selector: 'cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.css'],
})
export class CepSearchComponent implements OnInit {
  cepMask = '00000-000';
  text = '';
  cepData: CEP;

  constructor(private _cepService: CepServiceService,
    private _router: Router) {}

  ngOnInit() {}

  async callCep(e: Event) {
    const cepValue = (e.target as HTMLInputElement).value;
    const cepParsed = cepValue.replace('-', '');
    
    this.cepData = await cep(cepParsed);
    this._cepService.setCep(this.cepData);
    this._router.navigate(['/cep-info']);
    console.log(this.cepData);
  }
}