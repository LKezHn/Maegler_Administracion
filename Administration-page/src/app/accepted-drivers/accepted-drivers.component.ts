import { Component, OnInit } from '@angular/core';
import { Driver, DriversService } from '../drivers.service';


@Component({
  selector: 'app-accepted-drivers',
  templateUrl: './accepted-drivers.component.html',
  styleUrls: ['./accepted-drivers.component.css']
})
export class AcceptedDriversComponent implements OnInit {

  acceptedDrivers: Driver[] = []

  constructor(private driverService: DriversService) { }

  ngOnInit(): void {
    this.driverService.getActiveDrivers().subscribe( res => {
      this.acceptedDrivers = res.employees
    })
  }

  deleteDriver(name: string){
    this.driverService.deleteDriver(name)
  }

}
