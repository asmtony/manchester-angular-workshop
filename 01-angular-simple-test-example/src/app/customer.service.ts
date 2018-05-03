import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {

    constructor(public http: Http) {
    }

    get(): any {

        return this.http.get("/customers").toPromise()
            .then(result => {
                // Success
                return result.json();
            })
            .catch(reason => {
                // Error
                console.log(reason);
            });
    }
}