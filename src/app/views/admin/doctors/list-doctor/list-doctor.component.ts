import {Component} from '@angular/core';
import {DoctoresService} from "../../../../services/doctorsService/doctores.service";
import {Router} from "@angular/router"
import {Location} from '@angular/common';
import Swal from 'sweetalert2'
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent {

  public data: any[] = [];
  public columns: string[] = ["nombres", "apellidos", "especialidad", "consultorio", "email", "acciones"];
  public fields: string[] = ["name", "last_name", "specialty", "consulting_room", "email"];

  constructor(
    private location: Location,
    private router: Router,
    private doctoresService: DoctoresService,
    private toastr: ToastrService) {
  }

  loadData() {

    this.doctoresService.getDoctors().subscribe(
      (response) => {
        this.data = response.doctors;
        console.log(this.data)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarDoctor(id: string) {

    Swal.fire({
      title: 'Esta seguro?',
      text: "Este cambio no se podrá revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#38bdf8',
      cancelButtonColor: '#e2e2e2',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.doctoresService.deleteDoctor(id).subscribe(
          (response) => {
            this.data = this.data.filter(item => {
              return item._id != id
            })
          },
          (error) => {
            console.log(error);
          }
        );

        this.toastr.success('El registro  ha sido eliminado', 'Borrado!', {
          positionClass: 'toast-bottom-right',
          timeOut: 5000
        });


      }
    })

  }


  ngOnInit() {
    this.loadData()
  }

}
