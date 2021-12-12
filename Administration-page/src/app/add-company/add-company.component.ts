import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  newProductForm = new FormGroup({
    nombre: new FormControl("", Validators.required),
    informacion: new FormControl("", Validators.required),
    precio: new FormControl("", Validators.required),
    imagen: new FormControl("", Validators.required)
  })

  constructor(private companyService: CompaniesService, private location: Location) { }

  ngOnInit(): void {
  }

  onFileChange(event: any){
    if(event.target.files.length > 0){
      const file = event.target.files[0]
      this.newProductForm.patchValue({
        imagen: file
      })
    }
  }

  addNewProduct(){
    this.companyService.addNewProduct(this.newProductForm.value).subscribe( res => {
      this.companyService.addCompany = false;
      this.companyService.isInCompanyDetails = false;
      this.closeEvent.emit(this.close)
    })
    //this.location.back()
  }

  cancel(){
    this.companyService.addCompany = false;
    this.companyService.isInCompanyDetails = false;
    this.closeEvent.emit(this.close)
  }

}
