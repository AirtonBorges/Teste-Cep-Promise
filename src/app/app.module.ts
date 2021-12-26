import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppComponent } from './app.component';
import { CepSearchComponent } from './cep-search/cep-search.component';
import { CepInfoComponent } from './cep-info/cep-info.component';
import { AppRoutingModule } from '../app-routing.module';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [BrowserModule, FormsModule, NgxMaskModule.forRoot(), AppRoutingModule],
  declarations: [AppComponent, CepSearchComponent, CepInfoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
