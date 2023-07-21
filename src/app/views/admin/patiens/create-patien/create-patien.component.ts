import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PacientesService} from '../../../../services/patiensService/pacientes.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-patien',
  templateUrl: './create-patien.component.html',
  styleUrls: ['./create-patien.component.css']
})
export class CreatePatienComponent {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.pattern(/^[a-zA-Z\s]*$/), Validators.min(3)]),
    lastName: new FormControl('', [Validators.pattern(/^[a-zA-Z\s]*$/), Validators.min(3)]),
    identificationCard: new FormControl(0, [Validators.min(8)]),
    age: new FormControl(0, [Validators.min(18), Validators.max(100)]),
    phone: new FormControl(0, [Validators.min(7)]),
  });

  constructor(
    private route: ActivatedRoute,
    private patientService: PacientesService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  guardar() {
    if (this.formGroup.valid) {
      this.patientService.createPatien(this.formGroup.value).subscribe(
        (res: any) => {
          this.formGroup.reset();
          this.router.navigate(['/patiens']);
          this.toastr.success('Paciente registrado', 'Excelente!', {
            positionClass: 'toast-bottom-right',
            timeOut: 5000
          });
        },
        (err: any) => {
          console.log(err);
        }
      );
    } else {
      Object.keys(this.formGroup.controls).forEach(key => {
        const control = this.formGroup.get(key);
        if (control && control.invalid) {
          control.markAsTouched();
          const invalidValue = control.value;
          console.log(`Valor inválido para el campo ${key}:`, invalidValue);
          const controlErrors = control.errors;
          console.log(`Errores de validación para el campo ${key}:`, controlErrors);
        }
      });
    }
  }
}
