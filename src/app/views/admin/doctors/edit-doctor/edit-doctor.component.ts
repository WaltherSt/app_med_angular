import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DoctoresService} from "../../../../services/doctorsService/doctores.service";


@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  id: string = ""

  public formGroup = new FormGroup({
    "name": new FormControl<string>(''),
    "last_name": new FormControl<string>(''),
    "identification_card": new FormControl<string>(''),
    "specialty": new FormControl<string>(''),
    "consulting_room": new FormControl<string>(''),
    "email": new FormControl<string>(''),
  });

  public especialidades: string[] = [
    "Medicina general",
    "Cardiología",
    "Medicina interna",
    "Dermatología",
    "Rehabilitación física",
    "Psicología",
    "Odontología",
    "Radiología"

  ];

  constructor(
    private route: ActivatedRoute,
    private doctoresService: DoctoresService,
    private router: Router) {
  }

  cargarFormulario(id: any) {
    this.doctoresService.editDoctor(id).subscribe((res: any) => {

      const {doc, status} = res
      this.formGroup.reset(doc)
      this.id = id

    }, (err: any) => {
      console.log(err)
    })
  }

  enviar() {
    this.doctoresService.updateDoctor(this.id, this.formGroup.value).subscribe(res => {
      this.router.navigate(['/admin/doctors'])
      console.log(res)
    }, (err: any) => {
      console.log(err)

    })

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        if (params.id) {
          this.cargarFormulario(params.id)
        }
      }
    )
  }


}
