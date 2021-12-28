import { Component, OnInit } from '@angular/core';
import { CEP } from 'cep-promise';
import { CepServiceService } from '../cep-service.service';


@Component({
  selector: 'app-cep-info',
  templateUrl: './cep-info.component.html',
  styleUrls: ['./cep-info.component.css']
})
export class CepInfoComponent implements OnInit {
  cepData: CEP;
  
  constructor(private _cepService: CepServiceService) { }

  ngOnInit(): void {
    this.cepData = this._cepService.getCep();
  }
}
