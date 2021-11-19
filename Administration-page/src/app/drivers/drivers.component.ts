import { Component, OnInit } from '@angular/core';
import { DriversService } from '../drivers.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  isInActive : boolean = true;
  isInForAccept : boolean = false;

  constructor(private dS: DriversService) { }

  ngOnInit(): void {
  }

  getAcceptedDrivers(){
    this.isInActive = true;
    this.isInForAccept = false

  }

  getForAcceptDrivers(){
    this.isInForAccept = true;
    this.isInActive = false;
  }

}
