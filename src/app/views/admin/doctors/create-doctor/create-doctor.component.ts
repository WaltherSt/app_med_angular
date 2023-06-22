import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
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
    "name": new FormControl<string>(''),
    "last_name": new FormControl<string>(''),
    "specialty": new FormControl<string>(''),
    "consulting_room": new FormControl<string>(''),
    "email": new FormControl<string>(''),
  });

  public especialidades: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private specialtiesService: SpecialtyServiceService,
    private doctoresService: DoctoresService,
    private router: Router) {
  }

  guardar() {
    this.doctoresService.createDoctor(this.formGroup.value).subscribe((res: any) => {
      this.formGroup.reset()
      this.router.navigate(['/admin/doctors'])

    }, (err: any) => {
      console.log(err)
    })
  }

  getSpecialties() {
    this.specialtiesService.getAll().subscribe(res=>{
      this.especialidades = res.data
      console.log(this.especialidades)

    })
  }

  public ngOnInit() {
    this.getSpecialties()
  }


}
