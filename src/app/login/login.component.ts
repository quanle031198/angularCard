import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  auth: any;
  checkRouterLogin: boolean = false;


  constructor(private formBuilder: FormBuilder, public as:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.addClassInput();
    
    this.loginForm = new FormGroup({   
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

    
  }

  get username() { return this.loginForm.get('username')!; }
  get password() { return this.loginForm.get('password')!; }

  onSubmit(){
    this.as.getUser().subscribe((response) => {
      const user = response.find((a:any) => {
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password;
      });
      if(user){
        alert('Login Success !');
        this.checkRouterLogin = true;
        this.checkRouterLogin ? this.as.routerIn() : this.as.routerOut()
        this.loginForm.reset();
        this.router.navigate(['main'])
      }else{
        alert('Login Fail !');
        this.loginForm.reset();
      }
    }, err => {
      alert('Co gi do sai !');
    })
  }



  addClassInput(){
    $('.inputf').each(function () {
      $(this).on('blur', function () {
          if ($(this).val() != "") { $(this).addClass('has-val'); }
          else { $(this).removeClass('has-val'); }
      })
  })
  }
}
