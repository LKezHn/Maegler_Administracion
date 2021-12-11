import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Driver {
  fullName: string,
  _id: string,
  email: string,
  profilePhoto: string,
  createdAt: string
}

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  DRIVER_AI_URI = "http://localhost:3000/drivers"

  private actives: Driver[] = []

  private forAccept: any = [
    { name: "Daniel Alessandro" },
    { name: "Jaime Galeas" },
    { name: "Peter Parker" },
    { name: "Jhon Wick" }
  ]

  constructor(private http: HttpClient) { }

  public getActiveDrivers() {
    const token: string = localStorage.getItem("token") || ""
    return this.http.get<any>(`${this.DRIVER_AI_URI}/accepted`, {
      headers: {
        'Authorization': token
      }
    }
    )
  }

  public getForAcceptDrivers() {
    return this.forAccept
  }

  public deleteDriver(name: string) {
    let i = 0;
    for (let driver of this.forAccept) {
      if (driver.name == name) {
        this.actives.splice(i, 1)
      }
      i++;
    }
  }

  public acceptDriver(name: string) {
    let i = 0;
    let acceptedDriver: Driver;
    for (let driver of this.forAccept) {
      if (driver.name == name) {
        acceptedDriver = driver;
        this.forAccept.splice(i, 1)
        this.actives.push(acceptedDriver)
      }
      i++;
    }
  }

}
