import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {PacientesService} from "../../../../services/patiensService/pacientes.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-patien',
  templateUrl: './create-patien.component.html',
  styleUrls: ['./create-patien.component.css']
})
export class CreatePatienComponent {
  formGroup = new FormGroup({
    "name": new FormControl<string>('',),
    "lastName": new FormControl<string>(''),
    "identificationCard": new FormControl<number>(0),
    "age": new FormControl<number>(0),
    "phone": new FormControl<number>(0),
  });
  constructor(
    private route: ActivatedRoute,
    private patientService: PacientesService,
    private router: Router,
    private toastr: ToastrService) {
  }

  guardar() {
    this.patientService.createPatien(this.formGroup.value).subscribe((res: any) => {
      this.formGroup.reset()
      this.router.navigate(['/admin/patiens'])
      this.toastr.success('Paciente creado', 'Excelente!', {
        positionClass: 'toast-bottom-right',
        timeOut: 5000
      });

    }, (err: any) => {
      console.log(err)
    })
  }


}
