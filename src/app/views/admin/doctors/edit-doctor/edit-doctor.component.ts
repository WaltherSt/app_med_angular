import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DoctoresService} from "../../../../services/doctorsService/doctores.service";
import {SpecialtyServiceService} from "../../../../services/specialtyService/specialty-service.service";


@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  _id: string = ""

  public formGroup = new FormGroup({
    "name": new FormControl<string>(''),
    "lastName": new FormControl<string>(''),
    "specialty": new FormControl<string>(''),
    "consultingRoom": new FormControl<string>(''),
    "email": new FormControl<string>(''),
  });

  public specialities: any[] = [];
  public specialty: String = '';
  public id_specialty: String = ''

  constructor(
    private route: ActivatedRoute,
    private doctoresService: DoctoresService,
    private specialtiesService: SpecialtyServiceService,
    private router: Router) {
  }

  cargarFormulario(id: any) {
    this.doctoresService.editDoctor(id).subscribe((res: any) => {
      const {data, status} = res
      this.specialty = data[0].specialty;
      this.id_specialty = data[0].id_specialty;
      this.formGroup.reset(data[0])
      this._id = id
      this.formGroup.get('specialty')?.setValue(this.id_specialty.toString());

    }, (err: any) => {
      console.log(err)
    })
  }

  enviar() {
    this.doctoresService.updateDoctor(this._id, this.formGroup.value).subscribe(res => {
      this.router.navigate(['/doctors'])
      console.log(res)
    }, (err: any) => {
      console.log(err)
    })
  }

  getSpecialties() {
    this.specialtiesService.getAll().subscribe(res => {
      this.specialities = res.data
    })
  }

  ngOnInit() {
    this.getSpecialties()
    this.route.params.subscribe(
      (params: any) => {
        if (params.id) {
          this.cargarFormulario(params.id)

        }
      }
    )
  }


}
