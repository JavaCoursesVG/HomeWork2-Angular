import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const PERSON_API = 'http://localhost:8081/persons/'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(PERSON_API);
  }

  getPersonById(id: number): Observable<any> {
    return this.http.get(PERSON_API + id)
  }

  getPersonByName(firstname: string, lastname: string): Observable<any> {
    return  this.http.get(PERSON_API + "findByName", {
      params: {
        firstname: firstname,
        lastname: lastname
      }
    })
  }

  getPersonByDateOfBirth(dateOfBirth: string): Observable<any> {
    return this.http.get(PERSON_API + "findByBirthDate", {
      params: {
        dateOfBirth: dateOfBirth
      }
    })
  }

  updatePerson(person: any): Observable<any> {
    return this.http.post(PERSON_API + 'update', person);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(PERSON_API + id)
  }
}
