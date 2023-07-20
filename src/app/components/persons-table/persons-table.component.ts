import {Component} from '@angular/core';
import {Person} from "../../Models/Person";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.css'],
})

export class PersonsTableComponent {


  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'gender',
    'dateOfBirth',
    'phoneNumber',
  ];

  EmpData2: Person[] = [
    {
    id: 1,
    firstName: 'Anna 1',
    lastName: "Gosteva 1",
    gender: "FEMALE",
    dateOfBirth: "1984-02-11",
    phoneNumber: "+371 88 888 888",
    email: "anna.gosteva@gmail.com",
    }, {
    id: 2,
    firstName: "Vadims 1",
    lastName: "Gostevs 1",
    gender: "MALE",
    dateOfBirth: "1983-06-29",
    phoneNumber: "+371 99 999 999",
    email: "vadims.gostevs@gmail.com",
  }];

  dataSource = new MatTableDataSource(this.EmpData2);

  // constructor() {}
  //
  // ngAfterViewInit() {}
  //
  // ngOnInit(): void {}
}
