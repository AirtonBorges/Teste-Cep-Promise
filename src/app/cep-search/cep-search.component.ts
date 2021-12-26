import { Component, OnInit } from '@angular/core';
import cep, { CEP } from 'cep-promise';

@Component({
  selector: 'cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.css'],
})
export class CepSearchComponent implements OnInit {
  cepMask = '00000-000';
  text = '';
  cepData: CEP;

  constructor() {}

  ngOnInit() {}

  async callCep(e: Event) {
    const cepValue = (e.target as HTMLInputElement).value;
    const cepParsed = cepValue.replace('-', '');
    
    this.cepData = await cep(cepParsed);
  }
}