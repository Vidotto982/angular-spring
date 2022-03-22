import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../model/person";
import { AddPersonComponent } from "../add-person/add-person.component"
// Use this after the variable declaration
@Injectable({
  providedIn: 'root'
})
export class PersonService {
 readonly url: string = 'http://localhost:8080/api/v1/person'

  private headers: any;
  person: PersonService[] = [];
  constructor(private http: HttpClient){
  }

  getPersons(){
    let header = new HttpHeaders().set('Type-content0','aplication/json')
    return this.http.get(this.url,{
      headers: header
    })
  }
  getPerson(personId: number): Observable<Person>{
    const urlPerson = `${this.url}/${personId}`;
    return this.http.get<Person>(urlPerson);
  }

  deletePerson(id: number):Observable<{}>{
    const urlPerson = `${this.url}/${id}`;
    return this.http.delete(urlPerson);
  }

  addPerson(person: any): Observable<any>{
    console.log(person);
    return this.http.post(this.url, person);
  }

  editPerson(person: any): Observable<any>{
    const urlPerson= `${this.url}/${person.id}`;
    return this.http.post(urlPerson, person.id);
  }
}
