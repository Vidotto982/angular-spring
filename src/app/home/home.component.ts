import { Component, OnInit } from '@angular/core';
import { PersonService } from "../services/person-service.service";
import { Person } from "../model/person";
import { AppRoutingModule } from "../app-routing.module"
import { MatDialog } from "@angular/material/dialog";
import { AddPersonComponent } from "../add-person/add-person.component";

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
    private personService: PersonService, public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getPersons();
    this.personService.$editModal.subscribe((valor)=>{this.editSwitch = valor});
  }
  editPerson(person: Person){
    this.editSwitch = true;
    const formRef = this.dialog.open(AddPersonComponent);
    formRef.componentInstance.person = person;
    formRef.componentInstance.isEdit = true;
    formRef.afterClosed().subscribe(result => {
    this.personService.editPerson(person);
    });
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

  editEmit(emit: void){

  }


}

