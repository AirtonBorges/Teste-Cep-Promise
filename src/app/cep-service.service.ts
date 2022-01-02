import { Injectable } from '@angular/core';
import { CEP } from 'cep-promise';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {
  private cepSource = new BehaviorSubject<CEP>(null);
  cep = this.cepSource.asObservable();

  constructor() { }

  public setCep(pCep: CEP) {
    this.cepSource.next(pCep);
  }}
