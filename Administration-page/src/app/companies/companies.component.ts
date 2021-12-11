import { Component, OnInit} from '@angular/core';
import { CompaniesService, Company } from '../companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {


  companies: Company[] = []
  constructor(public companyService: CompaniesService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe( res => {{
      this.companies = res.companies
    }});
  }

  getCompanyDetails(name: string){
    this.companyService.isInCompanyDetails = true
    this.companyService.setSelectedCompany(name)
  }

}
