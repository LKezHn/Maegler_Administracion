import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { DriversComponent } from './drivers/drivers.component';
import { OrdersComponent } from './orders/orders.component';
import { CompaniesService } from './companies.service';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { OrdersService } from './orders.service';
import { AcceptedDriversComponent } from './accepted-drivers/accepted-drivers.component';
import { ForAcceptDriversComponent } from './for-accept-drivers/for-accept-drivers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CompaniesComponent,
    DriversComponent,
    OrdersComponent,
    CompanyDetailsComponent,
    AddCompanyComponent,
    AcceptedDriversComponent,
    ForAcceptDriversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CompaniesService,
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
