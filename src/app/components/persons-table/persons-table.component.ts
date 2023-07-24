import {Component} from '@angular/core';
import {Person} from "../../Models/Person";
import {MatTableDataSource} from "@angular/material/table";
import {HttpClient} from "@angular/common/http";
import {PersonService} from "../../services/services/person.service";


@Component({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.css'],
})



export class PersonsTableComponent {

  constructor(private http: HttpClient,
              private personService: PersonService
              ) { }

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'gender',
    'dateOfBirth',
    'phoneNumber',
  ];

  EmpData: Person[] = [];

  dataSource = new MatTableDataSource(this.EmpData);

  ngOnInit(): void {
    // this.getUserById(1);
    this.getAll();
  }

  getAll(){
    this.personService.getAll().subscribe(data => {
      let persons: Person[][][] = Object.values(data);
      Object.values(persons[0]).forEach(p => {
          this.dataSource= new MatTableDataSource(p);
      })

    });
  }
}
