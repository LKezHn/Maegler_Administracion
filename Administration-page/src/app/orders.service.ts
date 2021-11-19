import { Injectable } from '@angular/core';

export interface Order {
  id: string,
  logo: string,
  receiver: string,
  direction: string
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private orders: Order[] = [
    {
      id: "1",
      logo: "../../assets/burguerKing.jpg",
      receiver: "Erick Marin",
      direction: "UNAH"
    },
    {
      id: "2",
      logo: "../../assets/burguerKing.jpg",
      receiver: "Erick Marin",
      direction: "UNAH"
    },
    {
      id: "3",
      logo: "../../assets/burguerKing.jpg",
      receiver: "Erick Marin",
      direction: "UNAH"
    },
    {
      id: "4",
      logo: "../../assets/burguerKing.jpg",
      receiver: "Erick Marin",
      direction: "UNAH"
    },
    {
      id: "5",
      logo: "../../assets/burguerKing.jpg",
      receiver: "Erick Marin",
      direction: "UNAH"
    }
  ]

  constructor() { }

  public getOrders(){
    return this.orders
  }



}
