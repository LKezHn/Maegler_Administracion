import { Component, OnInit } from '@angular/core';
import { CompaniesService, Company } from '../companies.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  currCompany : Company | any;

  constructor(private cS: CompaniesService) { }

  ngOnInit(): void {
    this.currCompany = this.cS.getCurrentCompany();
  }

  addProduct(){
    this.cS.isInCompanyDetails = false;
    this.cS.addCompany = true;
  }

}
