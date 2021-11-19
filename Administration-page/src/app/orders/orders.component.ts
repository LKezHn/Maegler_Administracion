import { Component, OnInit } from '@angular/core';
import { Driver, DriversService } from '../drivers.service';
import { Order, OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  isOpen : boolean = false
  orders : Order[] = []
  drivers : Driver[] = []

  constructor(private oS: OrdersService, private dS: DriversService) { }

  ngOnInit(): void {
    this.orders = this.oS.getOrders()
  }

  openModal(){
    this.drivers = this.dS.getActiveDrivers()
    this.isOpen = true
  }

}
