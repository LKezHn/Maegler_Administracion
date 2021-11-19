import { Injectable } from '@angular/core';

export interface Driver{
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  private actives : Driver[] = [
    { name: "Luis Martinez" },
    { name: "Juan Boquín" },
    { name: "Lionel Messi" },
    { name: "Jose Inestroza" },
    { name: "Ana Hernandez" }
  ]

  private forAccept : Driver[] = [
    { name: "Daniel Alessandro" },
    { name: "Jaime Galeas" },
    { name: "Peter Parker" },
    { name: "Jhon Wick" }
  ]

  constructor() { }

  public getActiveDrivers(){
    return this.actives
  }

  public getForAcceptDrivers(){
    return this.forAccept
  }

  public deleteDriver(name: string){
    let i = 0;
    for(let driver of this.actives){
      if(driver.name == name){
        this.actives.splice(i, 1)
      }
      i++;
    }
  }

  public acceptDriver(name: string){
    let i = 0;
    let acceptedDriver : Driver;
    for(let driver of this.forAccept){
      if(driver.name == name){
        acceptedDriver = driver;
        this.forAccept.splice(i, 1)
        this.actives.push(acceptedDriver)
      }
      i++;
    }
  }

}
