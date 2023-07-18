import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputFormComponent} from "./components/test-input-form/input-form.component";
// import {InputFormComponent} from "../../BAK/input-form/input-form.component";

const routes: Routes = [
  // {path: 'input-form', component: InputFormComponent}
  {path: 'input-form', component: InputFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
