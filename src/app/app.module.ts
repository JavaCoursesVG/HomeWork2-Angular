import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material-module";
import {HttpClientModule} from "@angular/common/http";
import { InputFormComponent } from './components/input-form/input-form.component';
import { InputForm2Component } from './components/input-form2/input-form2.component';
import { AppNameEditorComponent } from './services/components/app-name-editor/app-name-editor.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    InputForm2Component,
    AppNameEditorComponent,
    NameEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
