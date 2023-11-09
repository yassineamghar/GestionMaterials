import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './WebUi/GestionMaterial/dashboard/dashboard.component';
import { ManufacturingsComponent } from './WebUi/GestionMaterial/manufacturings/manufacturings.component';
import { SupliersComponent } from './WebUi/GestionMaterial/supliers/supliers.component';
import { MaterialsComponent } from './WebUi/GestionMaterial/materials/materials.component';
import { TransactsComponent } from './WebUi/GestionMaterial/transacts/transacts.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products/manufacturings', component: ManufacturingsComponent },
  { path: 'products/supliers', component: SupliersComponent },
  { path: 'products/materials', component: MaterialsComponent },
  { path: 'transacts', component: TransactsComponent },
  // Add more routes as needed
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
