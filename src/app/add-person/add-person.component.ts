import { Component, OnInit } from '@angular/core';
import  { PersonService } from "../services/person-service.service";
import  { Person } from "../model/person";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  createdForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder,
              private personService: PersonService) {}

  ngOnInit() {
    this.createdForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      country: ['', [Validators.required]
      ]
    })
  }

  onSubmit() {
    this.personService.addPerson(this.createdForm.getRawValue());
  }
}
