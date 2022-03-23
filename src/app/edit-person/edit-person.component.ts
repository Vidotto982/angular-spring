import { Component, OnInit } from '@angular/core';
import { PersonService } from "../services/person-service.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  createdForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder,
              private personService: PersonService) { }
   public personList: Array<any> = [];

  ngOnInit(): void {
    this.createdForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      country: ['', [Validators.required]
      ]
    })
    this.personService.getPersons().subscribe((resp: any) => {
      this.personList = resp;
    })
  }
  onSubmit() {
    this.personService.editPerson(this.createdForm.getRawValue());
  }
 closeEditModal(){
    this.personService.$editModal.emit(false);
 }

}
