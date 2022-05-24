import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userForm: any;
  formSubmitted : boolean = false; 

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(10)]],
      subject: ['',[Validators.required, Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(300), Validators.minLength(20)]],
    });
  }

  onSubmit(){
    if(this.userForm.valid){
      this.userForm.reset();
      alert('Dziękujemy za wypełnienie formularza!')
      this.formSubmitted = false; 
    } else {
      this.formSubmitted = true;
    }
  }

}
