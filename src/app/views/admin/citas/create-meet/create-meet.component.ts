import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DoctoresService} from "../../../../services/doctorsService/doctores.service";
import {SpecialtyServiceService} from "../../../../services/specialtyService/specialty-service.service";
import {PacientesService} from "../../../../services/patiensService/pacientes.service";
import {MeetsServiceService} from "../../../../services/meetsService/meets-service.service";
import * as dayjs from 'dayjs'
@Component({
  selector: 'app-create-meet',
  templateUrl: './create-meet.component.html',
  styleUrls: ['./create-meet.component.css']
})
export class CreateMeetComponent implements OnInit {

  public formGroup = new FormGroup({
    "patient": new FormControl<string>(''),
    "specialty": new FormControl<string>(''),
    "doctor": new FormControl<string>(''),
    "date": new FormControl<string>(''),
    "hour": new FormControl<string>(''),
  });

  public especialidades: any[] = [];
  public patients: any[] = []
  public doctors: any[] = []
  public availableHour: any[] = []
  constructor(
    private route: ActivatedRoute,
    private doctoresService: DoctoresService,
    private router: Router,
    private specialtiesService: SpecialtyServiceService,
    private patientsService: PacientesService,
    private meetService: MeetsServiceService
  ) {

  }

  guardar() {
    this.meetService.createMeet(this.formGroup.value).subscribe((res: any) => {
      this.formGroup.reset()
      this.router.navigate(['/admin/citas'])

    }, (err: any) => {
      console.log(err)
    })
  }
  getSpecialties() {
    this.specialtiesService.getAll().subscribe(res => {
      this.especialidades = res.data
    })
  }
  getPatientsByDocument() {
    this.patientsService.getPatiens().subscribe(res => {
      this.patients = res.persons
    })
  }
  getDoctorBySpecialty(specialty_id: string) {
    this.doctoresService.getDoctorsBySpecialty(specialty_id).subscribe(res => {
      this.doctors = res.data
    })
  }
  getDoctorAgendaByDate() {

    const data = {
      doctor_id: this.formGroup.get('doctor')?.value,
      date: this.formGroup.get('date')?.value
    }
    this.meetService.getDoctorAgendaByDate(data).subscribe(res => {
      // @ts-ignore
      const not = res.meets.map((e) => e.hour)
      this.availableHour = this.availableHour.filter(item => !not.includes(item));
    })
  }
  verDisponibilidad() {
    const initHour = 8;
    const finalHour = 17;
    const interval = 30;
    const year = new Date().getFullYear();

    for (let h = initHour; h < finalHour; h++) {
      for (let m = 0; m < 60; m += interval) {
        this.availableHour.push(this.convertHours(`${h}:${m}:${year}`))
      }
    }
  }

  // Formatea la hora de la agenda para que esta quede en formato 12 Horas
  convertHours = (time: string) => dayjs(time).format('h:mm a');

  ngOnInit() {
    this.verDisponibilidad()
    this.getSpecialties()
    this.getPatientsByDocument()

    this.formGroup.get('specialty')?.valueChanges.subscribe(value => {
      if (value != null) {
        this.getDoctorBySpecialty(value)
      }
    })

    this.formGroup.get('date')?.valueChanges.subscribe(value => {
      if (value != null) {
        this.getDoctorAgendaByDate()
      }
    })

  }
}
