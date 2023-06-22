import { Component } from '@angular/core';
import {PacientesService} from "../../../../services/patiensService/pacientes.service";

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-patien',
  templateUrl: './list-patien.component.html',
  styleUrls: ['./list-patien.component.css']
})
export class ListPatienComponent {
  public data: any[] = [];
  public columns: string[] = ["nombres", "apellidos", "identificación", "edad","telefono", "acciones"];
  public fields: string[] = ["name", "last_name", "identification_card", "age","phone"];

  constructor(public pacientesService: PacientesService, private toastr: ToastrService) {
    this.loadData()
  }

  loadData() {
    this.pacientesService.getPatiens().subscribe(
      (response) => {
        this.data = response.persons;

      },
      (error) => {
        console.log(error);
      }
    );
  }
  eliminarPatient(id: string) {
    this.pacientesService.deletePatien(id).subscribe(
      (response) => {
        this.data = this.data.filter(item => {
          return item._id != id
        })
      },
      (error) => {
        console.log(error);
      }
    );
    this.toastr.info('Registro eliminado', 'Excelente!', {
      positionClass: 'toast-bottom-right',
      timeOut: 5000
    });
  }

  editPatient(id: string) {
    this.pacientesService.editPatien(id)
  }

  reload() {
    this.loadData();
  }

  ngOnInit() {
  }

}
