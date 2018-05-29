// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";
// import { FormsModule } from "@angular/forms";

// import { AppComponent } from "./app.component";
// import { HelloWorldComponent } from "./hello-world/hello-world.component";

// @NgModule({
//   declarations: [AppComponent, HelloWorldComponent],
//   imports: [BrowserModule, FormsModule],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { createCustomElement } from "@angular/elements";

import { AppComponent } from "./app.component";
import { HelloWorldComponent } from "./hello-world/hello-world.component";

@NgModule({
  declarations: [AppComponent, HelloWorldComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  entryComponents: [HelloWorldComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const helloWorldCustomElement = createCustomElement(HelloWorldComponent, { injector: this.injector });
    customElements.define("hello-world", helloWorldCustomElement);
  }
}