import { Component, OnInit, NgZone} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  successMessage:string ="";
  regForm!: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    ) 
    {
      this.regForm = this.formBuilder.group({
        name: ['Neo'],
        surname: [''],
        email: [''],
        phone: [''],
        })
    }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      name: ['Neo',[Validators.required]],
      surname: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
      email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      phone: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
    })
  }

  // onSubmit(){
  //   this.successMessage = "Successfully Registered..."
  // }
  
}
