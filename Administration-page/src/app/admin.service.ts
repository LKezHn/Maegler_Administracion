import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  ADMIN_API_URI = "http://localhost:3000/admin"

  constructor(private http: HttpClient) { }

  loginUser({email, password} : { email: string, password: string }){
    const loginInfo = { email, password}
    return this.http.post<any>(`${this.ADMIN_API_URI}/login`, loginInfo)
  }
}
