import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// layouts
import { AdminComponent } from './layouts/admin/admin.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { CitasComponent } from './views/admin/meets/citas.component';
import { PacientesComponent } from './views/admin/patiens/pacientes.component';
import { DoctoresComponent } from './views/admin/doctors/doctores.component';
import { EditDoctorComponent } from './views/admin/doctors/edit-doctor/edit-doctor.component';
import { ListDoctorComponent } from './views/admin/doctors/list-doctor/list-doctor.component';
import { CreateDoctorComponent } from './views/admin/doctors/create-doctor/create-doctor.component';
import { ListPatienComponent } from './views/admin/patiens/list-patien/list-patien.component';
import { EditPatienComponent } from './views/admin/patiens/edit-patien/edit-patien.component';
import { CreatePatienComponent } from './views/admin/patiens/create-patien/create-patien.component';
import { ListMeetsComponent } from './views/admin/meets/list-meets/list-meets.component';
import { CreateMeetComponent } from './views/admin/meets/create-meet/create-meet.component';

const routes: Routes = [
  // admin views
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'doctors',
        component: DoctoresComponent,
        children: [
          { path: '', component: ListDoctorComponent },
          { path: 'edit/:id', component: EditDoctorComponent },
          { path: 'create', component: CreateDoctorComponent },
        ],
      },
      {
        path: 'patiens',
        component: PacientesComponent,
        children: [
          { path: '', component: ListPatienComponent },
          { path: 'edit/:id', component: EditPatienComponent },
          { path: 'create', component: CreatePatienComponent },
        ],
      },
      {
        path: 'meets',
        component: CitasComponent,
        children: [
          { path: '', component: ListMeetsComponent },
          { path: 'edit/:id', component: EditPatienComponent },
          { path: 'create', component: CreateMeetComponent },
        ],
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
