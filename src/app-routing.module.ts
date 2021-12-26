import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepSearchComponent } from './app/cep-search/cep-search.component';
import { CepInfoComponent } from './app/cep-info/cep-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/cep-search', pathMatch: 'full' },
  { path: 'cep-search', component: CepSearchComponent },
  { path: 'cep-info', component: CepInfoComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
