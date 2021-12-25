import { Component, OnInit } from '@angular/core';
import cep from 'cep-promise';

@Component({
  selector: 'cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.css'],
})
export class CepSearchComponent implements OnInit {
  
  cepMask = '00000-000';
  text = '';
  private _cepNumber: string;

  constructor() {}

  ngOnInit() {}
}
