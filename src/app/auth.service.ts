import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  adddrop(data) {
    const obj = {
      country_name:data.country_name,
        state_name: data.state_name,
        district_name:data.district_name,
        status: 1
    };
    console.log(obj);
    this.http.post(`${this.uri}/savedata`, obj)
        .subscribe(res => console.log('Done'));
  }

  getdrop() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editdrop(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

    updatedrop(data, id) {
      const obj = {
        country_name:data.country_name,
        state_name: data.state_name,
        district_name:data.district_name,
        status: 1
        };
      console.log(obj);
      console.log(id);
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deletedrop(id) {
      return this
                .http
                 .get(`${this.uri}/delete/${id}`);
    }

    getdropco() {
      return this
             .http
             .get(`${this.uri}/getcountry`);
    }

    getcountry(country) {
      console.log(country)
      return this
             .http
             .post(`${this.uri}/getcountryDetail/${country}`,country);
    }

    getstates(state) {
      console.log(state)
      return this
             .http
             .post(`${this.uri}/getstateDetail/${state}`,state);
    }
 
}
