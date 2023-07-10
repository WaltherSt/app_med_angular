import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// @ts-ignore
import {HttpClientModule} from '@angular/common/http';
// @ts-ignore
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// layouts
import {AdminComponent} from "./layouts/admin/admin.component";


// admin views
import {DashboardComponent} from "./views/admin/dashboard/dashboard.component";
import {CitasComponent} from "./views/admin/citas/citas.component";
import {PacientesComponent} from "./views/admin/patiens/pacientes.component";
import {DoctoresComponent} from "./views/admin/doctors/doctores.component";
import {HeaderStatsComponent} from "./components/headers/header-stats/header-stats.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {AdminNavbarComponent} from "./components/navbars/admin-navbar/admin-navbar.component";
import {CardTableComponent} from "./components/cards/card-table/card-table.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//services
import {PacientesService} from "./services/patiensService/pacientes.service";


import {EditDoctorComponent} from "./views/admin/doctors/edit-doctor/edit-doctor.component";
import {ListDoctorComponent} from './views/admin/doctors/list-doctor/list-doctor.component';
import {CreateDoctorComponent} from './views/admin/doctors/create-doctor/create-doctor.component';
import {ListPatienComponent} from './views/admin/patiens/list-patien/list-patien.component';
import {EditPatienComponent} from './views/admin/patiens/edit-patien/edit-patien.component';
import {CreatePatienComponent} from './views/admin/patiens/create-patien/create-patien.component';

import { ToastrModule } from 'ngx-toastr';
import { ListMeetsComponent } from './views/admin/citas/list-meets/list-meets.component';
import { CreateMeetComponent } from './views/admin/citas/create-meet/create-meet.component';

import { DropdownModule } from 'primeng/dropdown';
import {MultiSelectModule} from "primeng/multiselect";
import {InputMaskModule} from "primeng/inputmask";






@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    HeaderStatsComponent,
    SidebarComponent,
    AdminNavbarComponent,
    CitasComponent,
    PacientesComponent,
    DoctoresComponent,
    CardTableComponent,
    EditDoctorComponent,
    ListDoctorComponent,
    CreateDoctorComponent,
    ListPatienComponent,
    EditPatienComponent,
    CreatePatienComponent,
    ListMeetsComponent,
    CreateMeetComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    DropdownModule,
    FormsModule,
    MultiSelectModule,
    InputMaskModule,
    BrowserAnimationsModule

  ],
  providers: [PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
