import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {MeetsServiceService} from "../../../../services/meetsService/meets-service.service";


@Component({
  selector: 'app-list-meets',
  templateUrl: './list-meets.component.html',
  styleUrls: ['./list-meets.component.css']
})
export class ListMeetsComponent {

  public data: any[] = [];
  public columns: string[] = ["documento", "paciente", "especialidad", "medico", "fecha", "hora", "acciones"];
  public fields: string[] = ["patientIdentification", "patient", "specialty", "doctor", "date", "hour"];
  public isEdit: boolean = false;

  constructor(
    private router: Router,
    private meetsServiceService: MeetsServiceService,
  ) {
  }

  loadData() {

    this.meetsServiceService.getMeets().subscribe({
        next: (response) => {
          this.data = response.data;
        },
        error: (error) => {
          console.log(error);
        }
      },
    );
  }

  delete(id: string) {
    this.meetsServiceService.deleteMeet(id).subscribe({
      next: (response: any) => {
        this.data = this.data.filter(item => {
          return item._id != id
        })

      },
      error: (error) => {
        console.log(error)
      }

    })
  }

  ngOnInit() {
    this.loadData()
  }

}
