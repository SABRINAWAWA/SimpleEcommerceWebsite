import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted=false;
  ok=false;

  constructor(private myformBuilder: FormBuilder) { 
    this.contactForm=this.myformBuilder.group(
      {
        name:['', [Validators.required, Validators.minLength(5)]],
        message: ['', Validators.required], 
        email:['', Validators.required, Validators.email]
      }
    )
  }

  onSubmit(){
    this.submitted=true;
    if(this.contactForm.invalid){
      return;
    }else{
      this.ok=true;
    }
  }

  ngOnInit(): void {
    this.submitted=false;
    this.ok=false;
  }

}
