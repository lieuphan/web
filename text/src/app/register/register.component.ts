import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  constructor(private AuthService: AuthService, private fb:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name:['',Validators.required],
      number:['',Validators.required],
      password:['',Validators.required],
      
    })
  }
  onRegister(){
    this.AuthService.OnRegister(this.registerForm.value).then(result=>{
      if(result){
        alert("Submit success!")
      }
    }).catch(err=>{console.log(err);
     alert("Error!");
  })
  }

}
