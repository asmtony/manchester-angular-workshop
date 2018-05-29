import { Component, Input, Output, ViewEncapsulation, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "hello-world",
  template: `
    <h1>Hello {{name}}</h1>
    <input type="text" [(ngModel)]="name">
    <button (click)="changeName()">Save</button>`,
  encapsulation: ViewEncapsulation.Native
})
export class HelloWorldComponent implements OnInit {

  @Input() name: string;
  @Output() nameChange = new EventEmitter();

  changeName() {
    this.nameChange.emit(this.name);
  }

  ngOnInit() {
  }
}
