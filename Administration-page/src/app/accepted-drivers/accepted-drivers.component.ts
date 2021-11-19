import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Driver, DriversService } from '../drivers.service';

@Component({
  selector: 'app-accepted-drivers',
  templateUrl: './accepted-drivers.component.html',
  styleUrls: ['./accepted-drivers.component.css']
})
export class AcceptedDriversComponent implements OnInit {

  acceptedDrivers: Driver[] = []

  constructor(private dS: DriversService) { }

  ngOnInit(): void {
    this.acceptedDrivers = this.dS.getActiveDrivers();
  }

  deleteDriver(name: string){
    this.dS.deleteDriver(name)
  }

}
