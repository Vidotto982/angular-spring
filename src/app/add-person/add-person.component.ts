import { Component, OnInit } from '@angular/core';
import  { PersonService } from "../services/person-service.service";
import  { Person } from "../model/person";

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  private person: Person | undefined;

  constructor(private personService: PersonService) {

  }

  ngOnInit() {
  }
  createPerson(person: Person):void{
    this.personService.createPerson(person).subscribe();
    this.personService.getPersons().subscribe();

  }
}
