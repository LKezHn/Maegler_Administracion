import { Component, OnInit } from '@angular/core';
import { CompaniesService, Company } from '../companies.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  currCompany : Company | any;

  constructor(private companyService: CompaniesService) { }

  ngOnInit(): void {
    this.companyService.getCompanyDetails().subscribe( res => {
      this.currCompany = res.company
    })
  }

  addProduct(){
    this.companyService.isInCompanyDetails = false;
    this.companyService.addCompany = true;
  }

}
