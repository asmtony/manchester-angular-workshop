import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app works!';
  counter: number = 1;

    constructor(public customerService: CustomerService) {
    }

    plusone(): void {
      this.counter++;
    }

    getNumberOfCustomers(): number {
      let customers = this.customerService.get();
      return customers.length;
    }

}
