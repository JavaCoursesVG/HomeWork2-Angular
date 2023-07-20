import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputFormComponent} from "./components/test-input-form/input-form.component";
import {PersonsTableComponent} from "./components/persons-table/persons-table.component";

const routes: Routes = [
  {path: 'input-form', component: InputFormComponent},
  {path: 'persons-table', component: PersonsTableComponent},

  {path: '', redirectTo: 'app-navigation', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
