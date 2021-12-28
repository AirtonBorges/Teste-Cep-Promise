import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CepSearchComponent } from './cep-search/cep-search.component';
import { CepInfoComponent } from './cep-info/cep-info.component';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { IConfig, NgxMaskModule } from 'ngx-mask';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [BrowserModule, FormsModule, NgxMaskModule.forRoot(), AppRoutingModule],
  declarations: [AppComponent, CepSearchComponent, CepInfoComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}


