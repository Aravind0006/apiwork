import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  f : FormGroup;
  submitted : boolean = false;
  
  constructor(private fb:FormBuilder) { 
    
    this.f = this.fb.group({
      UserName : ['',Validators.required],
      Mobile:['',Validators.required],
      Email:['',Validators.required],
      
    })
  }
  
  ngOnInit(): void {
    this.f.controls['UserName'].setValue("");
  
  }
  submit()
  {
    this.submitted = true;
    console.log(this.f.value);
    console.log(this.f.controls['UserName'].value);
  }
}
