import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { CepSearchComponent } from './cep-search/cep-search.component';
import { CepInfoComponent } from './cep-info/cep-info.component';

import { APP_BASE_HREF } from '@angular/common';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { AlertMessageModule } from './alert-message/alert-message.module';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    AlertMessageModule,
    NgxMaskModule.forRoot(),
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, CepSearchComponent, CepInfoComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}


