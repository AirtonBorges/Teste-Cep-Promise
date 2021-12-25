import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppComponent } from './app.component';
import { CepSearchComponent } from './cep-search/cep-search.component';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [BrowserModule, FormsModule, NgxMaskModule.forRoot()],
  declarations: [AppComponent, CepSearchComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
