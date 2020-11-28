import { Component, OnInit } from '@angular/core';
import * as states from './states.json'
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../auth.service'
import { FormGroup, FormBuilder, Validators } from  '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  selectFrom :FormGroup
  constructor(private http:HttpClient,private bs: AuthService,private formBuilder: FormBuilder,) {
    this.createdropFrom();
   }
   country : String
   state : []
   district : []
   data :{}
  
   createdropFrom(){
    this.selectFrom = this.formBuilder.group({
      country_name: [''],  
      state_name: [''],
      district_name:['']
    });
  }

  ngOnInit(): void {
  this.http.get('assets/states.json').subscribe(res =>{
    console.log(res);
    this.data = res
    for(var da in res) {
      console.log(da);
      this.country = da
    }
  })
  }

  onChangeCountry(countryValue) { 
    var dataarr = [];
    console.log(countryValue)
    console.log(this.data)
    var obj = this.data
    console.log(obj)
    console.log(dataarr.indexOf(obj))
    if (dataarr.indexOf(obj) == -1) {
      for (var state in obj[countryValue]) {
        dataarr.push(state)
      }
      console.log(dataarr)
      this.getstate(dataarr)
    }
  }

  getstate(data) {
    this.state = data
  }

  onChangeState(stateValue) {
    var dataarr = [];
    console.log(stateValue)
    var obj = this.data
    console.log(obj)
    var cou = this.selectFrom.value
    var val = cou.country_name
    console.log(val)
    if (dataarr.indexOf(obj) == -1) {
      for (var district in obj[val][stateValue]) {
        dataarr.push(district)
      }
      console.log(dataarr)
      this.getdistrict(dataarr)
    }
  }

  getdistrict(data) {
    this.district = data
  }

}
