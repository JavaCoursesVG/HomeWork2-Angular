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
import {Person} from "../../Models/Person";
import {NotificationService} from "../../services/services/notification.service";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {DataTablesModule} from "angular-datatables";
import {PersonService} from "../../services/services/person.service";

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
  id = null;
  firstname = '';
  lastname = '';
  dateOfBirth = '';
  checked = false;


  constructor(
    private personService: PersonService,
    private notificationService: NotificationService,
  ) {
  }

  emailFormControl = new FormControl('', [Validators.email]);

  matcher = new MyErrorStateMatcher();


  findButtonClick(): void {
    if (!this.checked) {
      if (this.id) {
        this.personService.getPersonById(this.id).subscribe((response: Person) => {
          let person: Person = response;
          let persons: Person[] = [];
          persons.push(person);
          this.dataSource = new MatTableDataSource(persons);

          this.notificationService.showSnackBar("Data of person received. id: " + person.id);
        });
      } else if (this.firstname || this.lastname) {
        this.personService.getPersonByName(this.firstname, this.lastname).subscribe(data => {
          let persons: Person[][][] = Object.values(data);
          Object.values(persons[0]).forEach(p => {
            this.dataSource = new MatTableDataSource(p);
          })

        });

      } else if (this.dateOfBirth) {
        this.personService.getPersonByDateOfBirth(this.dateOfBirth).subscribe(data => {
          let persons: Person[][][] = Object.values(data);
          Object.values(persons[0]).forEach(p => {
            this.dataSource = new MatTableDataSource(p);
          })
        });
      }
    } else {
      this.getAll();
    }
  }


  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'gender',
    'dateOfBirth',
    'phoneNumber',
  ];

  EmpData: Person[] = [];

  dataSource = new MatTableDataSource(this.EmpData);

  getAll() {
    this.personService.getAll().subscribe(data => {
      let persons: Person[][][] = Object.values(data);
      Object.values(persons[0]).forEach(p => {
        this.dataSource = new MatTableDataSource(p);
      })
    });

  }
}
