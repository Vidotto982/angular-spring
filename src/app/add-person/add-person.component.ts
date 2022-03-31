import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import  { PersonService } from "../services/person-service.service";
import  { Person } from "../model/person";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  createdForm: FormGroup | any;

  @Input() person: Person | undefined;
  isEdit : boolean = false;
  constructor(private formBuilder: FormBuilder,
              private personService: PersonService,
              private snackBar: MatSnackBar)
  {}
  private message: string | undefined;

  ngOnInit() {
    this.createdForm = this.formBuilder.group({
      name: [this.person?.name ? this.person.name : '', [Validators.required]],
      lastname: [this.person?.lastname ? this.person.lastname : '', [Validators.required]],
      country: [this.person?.country ? this.person.country :  '', [Validators.required]
      ]
    })
  }
  addPerson() {
    this.personService.addPerson(this.createdForm.getRawValue()).subscribe();
  }

  editPerson() {
    if (this.person){
      this.personService.editPerson(this.createdForm.getRawValue(), this.person.id).subscribe();
      this.message ="Person edited correctly";
      this.openSnackBar(this.message);
    }
    if (!this.person) {
      this.message= "Unable to edit person";
      this.openSnackBar(this.message);
    }
  }

  openSnackBar(message : string): void {
    this.snackBar.open(message);
  }
}
