import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DoctoresService} from "../../../../services/doctorsService/doctores.service";

@Component({
  selector: 'app-create-meet',
  templateUrl: './create-meet.component.html',
  styleUrls: ['./create-meet.component.css']
})
export class CreateMeetComponent {


  public formGroup = new FormGroup({
    "name": new FormControl<string>(''),
    "last_name": new FormControl<string>(''),
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
    "Radiología",

  ];

  constructor(
    private route: ActivatedRoute,
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

  public ngOnInit() {

  }


}
