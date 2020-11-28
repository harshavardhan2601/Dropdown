import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import  dropdata  from '../drop'

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  drop :dropdata[]
  state : dropdata[]
  district : dropdata[]
  constructor(private bs:AuthService) { }

  ngOnInit(): void {
    this.bs.getdropco().subscribe((data:dropdata[]) =>{
      this.drop = data
      console.log(this.drop)
    })
  }

  onChangecountry(country) {
    console.log(country)
    this.bs.getcountry(country).subscribe((data:dropdata[]) =>{
      this.state = data
      console.log(this.state)
    })
  }

  onChangestate(state) {
    console.log(state)
    this.bs.getstates(state).subscribe((data:dropdata[]) =>{
      this.district = data
      console.log(data)
    })
  }

}
