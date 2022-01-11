import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Alert } from '../interfaces/alert';

@Injectable()
export class AlertService {
  private alertSubject = new BehaviorSubject<Alert>(null);
  alert = this.alertSubject.asObservable();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {}

  success(pMessage: string, pKeepAfterNavigationChange = false) {
      this.keepAfterNavigationChange = pKeepAfterNavigationChange;
      this.alertSubject.next({ type: 'success', message: pMessage });
  }

  error(pMessage: string, pKeepAfterNavigationChange = false) {
      this.keepAfterNavigationChange = pKeepAfterNavigationChange;
      this.alertSubject.next({ type: 'error', message: pMessage });
  }
}