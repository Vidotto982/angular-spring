import { Component } from '@angular/core';
import {PersonService} from "./services/person-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonService],
})
export class AppComponent {
  title = 'abm';
  constructor(private personSvc: PersonService) {}
  ngOnInit(){
    this.personSvc.getPersons().subscribe(res =>{console.log('Res', res)})
  }
}
