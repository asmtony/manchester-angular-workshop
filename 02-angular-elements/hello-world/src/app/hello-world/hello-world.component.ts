import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "events";

@Component({
  selector: "hello-world",
  template: `
    <h1>Hello {{name}}</h1>
    <input type="text" [(ngModel)]="name">
    <button (click)="changeName()">Save</button>`
})
export class HelloWorldComponent {
  @Input() name: string;
  @Output() nameChange = new EventEmitter();
  changeName() {
    this.nameChange.emit(this.name);
  }
}


