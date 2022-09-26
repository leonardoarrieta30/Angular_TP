import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePatientComponent} from "./public/home-patient/home-patient.component";
import {HomeDermatologistComponent} from "./public/home-dermatologist/home-dermatologist.component";

const routes: Routes = [
  {path: 'home-patient', component: HomePatientComponent},
  {path: 'home-dermatologist', component: HomeDermatologistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
