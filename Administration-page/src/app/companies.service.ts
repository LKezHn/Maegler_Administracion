import { Injectable } from '@angular/core';

export interface Product{
  name: string,
  photo: string,
  price: string
}

export interface Company{
  name: string,
  logo: string,
  banner: string,
  products: Product[]
}


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private company : any;
  private companies : Company[] = [
    {
      name: "BurgerKing",
      logo: "../../assets/burguerKing.jpg",
      banner: "../../assets/burguerKing_banner.jpg",
      products: [
        {
          name: "Bacon King",
          price: "L.130.00",
          photo: "../../assets/baconKing.png"
        },
        {
          name: "Hamburguesa con Queso",
          price: "L.120.00",
          photo: "../../assets/cheeseBurguer.png"
        }
      ]
    },
    {
      name: "Matambritas",
      logo: "../../assets/matambritas.png",
      banner: "../../assets/burguerKing_banner.jpg",
      products: [
        {
          name: "Bacon King",
          price: "L.130.00",
          photo: "../../assets/baconKing.png"
        },
        {
          name: "Hamburguesa con Queso",
          price: "L.120.00",
          photo: "../../assets/cheeseBurguer.png"
        }
      ]
    },
    {
      name: "Chilis",
      logo: "../../assets/chilis.png",
      banner: "../../assets/burguerKing_banner.jpg",
      products: [
        {
          name: "Bacon King",
          price: "L.130.00",
          photo: "../../assets/baconKing.png"
        },
        {
          name: "Hamburguesa con Queso",
          price: "L.120.00",
          photo: "../../assets/cheeseBurguer.png"
        }
      ]
    },
    {
      name: "Coco Baleadas",
      logo: "../../assets/cocobaleadas.png",
      banner: "../../assets/burguerKing_banner.jpg",
      products: [
        {
          name: "Bacon King",
          price: "L.130.00",
          photo: "../../assets/baconKing.png"
        },
        {
          name: "Hamburguesa con Queso",
          price: "L.120.00",
          photo: "../../assets/cheeseBurguer.png"
        }
      ]
    },
    {
      name: "Furiwa",
      logo: "../../assets/furiwa.png",
      banner: "../../assets/burguerKing_banner.jpg",
      products: [
        {
          name: "Bacon King",
          price: "L.130.00",
          photo: "../../assets/baconKing.png"
        },
        {
          name: "Hamburguesa con Queso",
          price: "L.120.00",
          photo: "../../assets/cheeseBurguer.png"
        }
      ]
    },
  ]

  public isInCompanyDetails: boolean = false;
  public addCompany: boolean = false;

  constructor() { }

  public getCompanies(){
    return this.companies
  }

  public setCurrentCompany(company: Company){
    this.company = company;
  }

  public getCurrentCompany(){
    return this.company;
  }

  public getCompanyDetails(){
    this.isInCompanyDetails = true;
  }

}
