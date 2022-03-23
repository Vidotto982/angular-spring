import { Component, OnInit } from '@angular/core';
import { PersonService } from "../services/person-service.service";
import { Observable } from "rxjs";
import { Person } from "../model/person";
import { AppRoutingModule } from "../app-routing.module"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public personList: Array<any> = [];
  notFound = false;
  routed = AppRoutingModule;
  editSwitch : boolean | any;
  constructor(
    private personService: PersonService,
  ) {
  }

  ngOnInit(): void {
    this.getPersons();
    this.personService.$editModal.subscribe((valor)=>{this.editSwitch = valor});
  }
  editPersonSwitch(){
    this.editSwitch = true;
  }
  getPersons() {
    this.personService.getPersons().subscribe((resp: any) => {
      this.personList = resp;
    })
  }

  deletePerson(person: Person): void {
    console.log(person)
    this.personService.deletePerson(person.id).subscribe((resp: any) => {
        this.getPersons();
      }
    );

  }
}
//   editPerson(person: any) {
//     this.personService.editPerson(person.id).subscribe((resp:any )=>{
//     this.getPersons()
//     });
//   }
// }
