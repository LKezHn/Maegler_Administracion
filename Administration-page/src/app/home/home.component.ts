import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  isInCompanies : boolean = true
  isInOrders : boolean = false
  isInDrivers : boolean = false

  constructor(public cS: CompaniesService) { }

  ngOnInit(): void {
  }

  getCompanies(){
    this.isInCompanies = true
    this.cS.isInCompanyDetails = false;
    this.isInDrivers = false
    this.isInOrders = false
  }

  getOrders(){
    this.isInOrders = true
    this.cS.isInCompanyDetails = false;
    this.isInDrivers = false
    this.isInCompanies = false
  }

  getDrivers(){
    this.isInDrivers = true
    this.cS.isInCompanyDetails = false;
    this.isInOrders = false
    this.isInCompanies = false
  }

  getCompanyDetails(){
    this.isInDrivers = false
    this.isInOrders = false
    this.isInCompanies = true
    this.cS.isInCompanyDetails = true;
  }

  addCompany(){
    this.isInDrivers = false
    this.isInOrders = false
    this.isInCompanies = false
    this.cS.isInCompanyDetails = false;
    this.cS.addCompany = true;
  }

  closeAddCompany($event: boolean){
    this.isInCompanies = $event;
  }

}
