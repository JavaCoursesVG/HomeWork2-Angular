import {Component} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgForOf, NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {PersonService} from "../../services/services/person.service";
import {Person} from "../../Models/Person";
import {NotificationService} from "../../services/services/notification.service";
import {MatTableModule} from "@angular/material/table";
import {DataTablesModule} from "angular-datatables";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf, MatIconModule, MatButtonModule, MatCheckboxModule, MatTableModule, DataTablesModule, NgForOf],
})
export class InputFormComponent {
  id = 1;
  firstname = '';
  lastname = '';
  dateOfBirth = '';
  checked = false;
  tempValue: any = '';

  person: Person = {} as Person;
  persons: Person[] = {} as [];

  dtOptions: DataTables.Settings = {};



  constructor(
    private personService: PersonService,
    private notificationService: NotificationService
  ) {
  }

  emailFormControl = new FormControl('', [Validators.email]);

  matcher = new MyErrorStateMatcher();

  findButtonClick(): void {
    if (!this.checked) {
      this.personService.getPersonById(this.id).subscribe((response: Person) => {
        console.log(response)
        this.person = response
        this.notificationService.showSnackBar("Data of person received. id: " + this.person.id);
      });
    } else {
      this.personService.getAll()
        .subscribe(data => {
          console.log(data);
        })
    }
  }
}
