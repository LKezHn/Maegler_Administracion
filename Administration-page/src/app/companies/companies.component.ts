import { Component, OnInit} from '@angular/core';
import { CompaniesService, Company } from '../companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {


  companies: Company[] = []
  constructor(public cS: CompaniesService) { }

  ngOnInit(): void {
    this.companies = this.cS.getCompanies();
  }

  getCompanyDetails(company: Company){
    this.cS.setCurrentCompany(company)
    this.cS.isInCompanyDetails = true

  }

}
