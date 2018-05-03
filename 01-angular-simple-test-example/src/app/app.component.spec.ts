import { fakeAsync, tick } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CustomerService } from './customer.service';

describe('AppComponent', () => {

    beforeEach(() => {
    });

    // Simple test (to prove everything is working)
    it('should increment the counter', fakeAsync(() => {
        // Arrange
        let appComponent = new AppComponent(undefined); // for a simple case, we don't need an instance of the customerService
        appComponent.counter = 5;

        // Act
        appComponent.plusone();

        // Assert
        expect(appComponent.counter).toBe(6);
    }));


    // Advanced test, with a mocked http response
    it('should return the number of customers', fakeAsync(() => {
        // Arrange
        let customerService = new CustomerService(undefined); // Create the customerService object. I'm passing undefined because I'm not testing the http service.
        let appComponent = new AppComponent(customerService); // Create an instance of the appComponent and inject our customerService objcet

        // Mock out the getCustomers method of the customerService. 
        // This line will return a canned response when appComponent.getCustomers calls customerService.get.
        spyOn(customerService, 'get').and.returnValue(['fred', 'bob', 'sue']);

        // Act
        let result = appComponent.getNumberOfCustomers();

        // Assert
        expect(result).toBe(3);
    }));
});
