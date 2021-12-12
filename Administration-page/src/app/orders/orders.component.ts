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
  orders : any = []
  drivers : any = []

  constructor(private orderService: OrdersService, private driverService: DriversService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe( res => {
      this.orders = res
    })
  }

  openModal(){
    this.drivers = this.driverService.getActiveDrivers()
    this.isOpen = true
  }

}
