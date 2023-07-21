import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SpecialtyServiceService} from "../../../../services/specialtyService/specialty-service.service";
import {DoctoresService} from "../../../../services/doctorsService/doctores.service";

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent {

  public formGroup = new FormGroup({
    "name": new FormControl<string>('', [Validators.min(3)]),
    "lastName": new FormControl<string>('', [Validators.min(4)]),
    "specialty": new FormControl<string>(''),
    "consultingRoom": new FormControl<string>('', [Validators.min(2)]),
    "email": new FormControl<string>('', [Validators.email]),
  });


  public especialidades: any[] = [];
  public error: any;

  constructor(
    private route: ActivatedRoute,
    private specialtiesService: SpecialtyServiceService,
    private doctoresService: DoctoresService,
    private router: Router) {
  }

  guardar() {

    this.doctoresService.createDoctor(this.formGroup.value).subscribe((res: any) => {
      this.formGroup.reset()
      this.router.navigate(['/doctors'])

    }, (err: any) => {
      this.error = err.message()
    })
  }

  getSpecialties() {
    this.specialtiesService.getAll().subscribe(res => {
      try {
        this.especialidades = res.data
        console.log(res.data)
      } catch (e: any) {
        e.error = e.message()
      }
    })
  }

  public ngOnInit() {
    this.getSpecialties()
  }


}
