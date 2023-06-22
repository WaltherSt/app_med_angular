import {Component} from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

import {ToastrService} from "ngx-toastr";
import Swal from "sweetalert2";
import {MeetsServiceService} from "../../../../services/meetsService/meets-service.service";

@Component({
  selector: 'app-list-meets',
  templateUrl: './list-meets.component.html',
  styleUrls: ['./list-meets.component.css']
})
export class ListMeetsComponent {


  public data: any[] = [];
  public columns: string[] = ["documento", "paciente", "especialidad", "medico", "fecha", "hora", "acciones"];
  public fields: string[] = ["document_id", "patient", "specialty", "doctor", "date", "hour"];

  constructor(
    private router: Router,
    private meetsServiceService: MeetsServiceService,
    private toastr: ToastrService) {
  }

  loadData() {

    this.meetsServiceService.getMeets().subscribe(
      (response) => {
        this.data = response.data;

      },
      (error) => {
        console.log(error);
      }
    );
  }


  ngOnInit() {
    this.loadData()
  }

}
