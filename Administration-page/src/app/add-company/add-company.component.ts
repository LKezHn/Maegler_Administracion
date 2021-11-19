import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  close : boolean = true

  @Output()
  closeEvent = new EventEmitter<boolean>();

  constructor(private cS: CompaniesService, private location: Location) { }

  ngOnInit(): void {
  }


  addNewProduct(){
    this.cS.addCompany = false;
    this.cS.isInCompanyDetails = false;
    this.closeEvent.emit(this.close)
    //this.location.back()
  }

}
