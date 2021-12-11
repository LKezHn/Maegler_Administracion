import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      this.adminService.loginUser(this.loginForm.value).subscribe( res => {
        localStorage.setItem("token", res.token)
        this.router.navigate(["/home"])
      }, err => {
        alert("Usuario o contraseña inválidos")
      })
    }else{
      alert("Debe llenar todos los campos")
    }
  }

}
