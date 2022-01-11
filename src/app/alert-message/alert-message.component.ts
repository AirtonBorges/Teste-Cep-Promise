import { Component, Input, OnInit } from '@angular/core';
import { Alert } from '../interfaces/alert';
import { AlertService } from './alert.service';

@Component({
  selector: 'alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  alert: Alert;

  constructor(private _alertService: AlertService) { }

  ngOnInit() {
    this._alertService.alert.subscribe((currentAlert: Alert) => this.alert = currentAlert);
  }
}
