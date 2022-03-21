import { Component, OnInit } from '@angular/core';
import { PersonService } from "../services/person-service.service";
import { Observable } from "rxjs";
import { Person } from "../model/person";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public personList: Array<any> = [];
  notFound = false;
  constructor(
    private personService: PersonService,
  ){
  }
  ngOnInit(): void {
    this.getPersons();
  }
  getPersons(){
    this.personService.getPersons().subscribe((resp:any)=>{
      this.personList = resp;
    })
  }
  deletePerson(person: Person):void{
    console.log(person)
    this.personService.deletePerson(person.id).subscribe((resp:any)=>{
      this.getPersons();
      }
    );

  }
  addPerson(person: any) {
    this.personService.createPerson(person).subscribe();
    this.personService.getPersons().subscribe();

  }


  editPerson(person: any) {
    this.personService.editPerson(person.id).subscribe();
    this.personService.getPersons().subscribe();

  }
}
