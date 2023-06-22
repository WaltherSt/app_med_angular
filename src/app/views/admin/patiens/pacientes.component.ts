import {Component, OnInit} from "@angular/core";
import {PacientesService} from "../../../services/patiensService/pacientes.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./pacientes.component.html",
})
export class PacientesComponent implements OnInit {
  ngOnInit(): void {
  }

}
