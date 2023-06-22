import {Component, Input, Output, OnInit, EventEmitter} from "@angular/core";

@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent {
  @Input() data: any;
  @Input() columns: any;
  @Input() fields: any;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor() {
  }

  onDelete(id: string) {
    this.delete.emit(id)
  }

  onEdit(id: string) {
    this.edit.emit(id)
  }}


