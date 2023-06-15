import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

form = new FormGroup({
  "firstname": new FormControl("", Validators.required),
  "lastname": new FormControl("", Validators.required),
  "email": new FormControl("", Validators.required),
  "message": new FormControl("", Validators.required)
})

onSubmit(){
  console.log("reactive forms submitted");
  console.log(this.form.value);
}

}
