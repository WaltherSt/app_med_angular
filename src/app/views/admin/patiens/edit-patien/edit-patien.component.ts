import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PacientesService} from "../../../../services/patiensService/pacientes.service";


@Component({
  selector: 'app-edit-patien',
  templateUrl: './edit-patien.component.html',
  styleUrls: ['./edit-patien.component.css']
})
export class EditPatienComponent implements OnInit {
  _id: string = ""


  public formGroup = new FormGroup({
    "name": new FormControl<string>(''),
    "lastName": new FormControl<string>(''),
    "identificationCard": new FormControl<number>(0),
    "age": new FormControl<number>(0),
    "phone": new FormControl<number>(0),

  });

  constructor(
    private route: ActivatedRoute,
    private patientsService: PacientesService,
    private router: Router) {
  }

  cargarFormulario(id: any) {

    this.patientsService.editPatien(id).subscribe((res: any) => {
      console.log(res)

      const {data, status} = res
      this.formGroup.reset(data)
      this._id = id

    }, (err: any) => {
      console.log(err)
    })
  }

  enviar() {
    this.patientsService.updatePatien(this._id, this.formGroup.value).subscribe(res => {
      this.router.navigate(['/patiens'])
      console.log(res)
    }, (err: any) => {
      console.log(err)
    })
  }


  ngOnInit(): void {

    this.route.params.subscribe(
      (params: any) => {

        if (params.id) {
          this.cargarFormulario(params.id)
        }
      }
    )
  }

}

