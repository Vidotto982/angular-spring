import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../model/person";
@Injectable({
  providedIn: 'root'
})
export class PersonService {
 readonly url: string = 'http://localhost:8080/api/v1/person'

  person: PersonService[] = [];
  constructor(private http: HttpClient){
  }
  $editModal = new EventEmitter<any>();

  getPersons(){
    let header = new HttpHeaders().set('Type-content0','application/json')
    return this.http.get(this.url,{
      headers: header
    })
  }

  deletePerson(id: number):Observable<{}>{
    const urlPerson = `${this.url}/${id}`;
    return this.http.delete(urlPerson);
  }

  editPerson(person: Person, id?: number): Observable<any>{
    const urlPerson= `${this.url}/${id}`;
    return this.http.put(urlPerson, person);
  }

  addPerson(person: Person): Observable<any>{
    console.log(person)
    return this.http.post(this.url, person);
  }
}
