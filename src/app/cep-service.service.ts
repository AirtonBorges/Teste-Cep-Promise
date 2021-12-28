import { Injectable } from '@angular/core';
import { CEP } from 'cep-promise';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {
  private cep:CEP;

  constructor() { }

  public setCep(pCep: CEP) {
    this.cep = pCep;
  }

  public getCep(): CEP {
    return this.cep;
  }
}
