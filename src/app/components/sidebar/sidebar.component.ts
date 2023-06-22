import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  collapseShow: String = "hidden";

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapseShow(classes: String) {
    this.collapseShow = classes;
  }
}
