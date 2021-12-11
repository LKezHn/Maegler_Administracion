import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product{
  id: string
  nombre: string,
  imagen: string,
  informacion: string,
  precio: string
}

export interface Company{
  nombre: string,
  logo: string,
  banner: string,
  direccion_empresa: string,
  informacion: string,
  suma_calificaciones: string,
  numero_calificaciones: string,
  productos: Product[]
}


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  COMPANY_API_URI = "http://localhost:3000/companies"

  public isInCompanyDetails: boolean = false;
  public addCompany: boolean = false;

  private selectedCompany = "";

  constructor(private http: HttpClient) { }

  public getCompanies(){
    return this.http.get<any>(`${this.COMPANY_API_URI}/`)
  }

  public setSelectedCompany(name: string){
    this.selectedCompany = name
  }

  public getCompanyDetails(){
    this.isInCompanyDetails = true;
    return this.http.get<any>(`${this.COMPANY_API_URI}/${this.selectedCompany}`)
  }

}
