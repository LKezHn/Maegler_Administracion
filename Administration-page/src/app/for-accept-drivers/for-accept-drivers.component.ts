import { Component, OnInit } from '@angular/core';
import { Driver, DriversService } from '../drivers.service';

@Component({
  selector: 'app-for-accept-drivers',
  templateUrl: './for-accept-drivers.component.html',
  styleUrls: ['./for-accept-drivers.component.css']
})
export class ForAcceptDriversComponent implements OnInit {

  forAcceptDrivers: Driver[] = []

  constructor(private dS: DriversService) { }

  ngOnInit(): void {
    this.forAcceptDrivers = this.dS.getForAcceptDrivers()
  }

  acceptDriver(name: string){
    this.dS.acceptDriver(name)
  }

}
