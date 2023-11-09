import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './WebUi/menu/menu.component';
import { DashboardComponent } from './WebUi/GestionMaterial/dashboard/dashboard.component';
import { ManufacturingsComponent } from './WebUi/GestionMaterial/manufacturings/manufacturings.component';
import { SupliersComponent } from './WebUi/GestionMaterial/supliers/supliers.component';
import { MaterialsComponent } from './WebUi/GestionMaterial/materials/materials.component';
import { TransactsComponent } from './WebUi/GestionMaterial/transacts/transacts.component';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    ManufacturingsComponent,
    SupliersComponent,
    MaterialsComponent,
    TransactsComponent
  ],
  imports: [
    BrowserAnimationsModule, 
    SidebarModule, 
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    TagModule,
    SliderModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
