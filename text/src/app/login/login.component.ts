import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLogin = false;
  constructor(private AuthService: AuthService, private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    })
  }
  onLogin() {
    this.AuthService.OnLogin(this.loginForm.value).then(result => {
      if (result) {
        alert("Đăng nhập thành công!");
        this.AuthService.checkRule(result.user.uid).then(res => {
          if (res.data())
            // console.log(res.data);
            this.router.navigate(['/admin']);
          else {
            this.router.navigate(['/home'])
          }
        }).catch(err => {
          console.log(err);
          // this.router.navigate(['/home'])

        })
      }
    }).catch(err => {
      console.log(err);
      alert("Lỗi!");
    })
  }
}
