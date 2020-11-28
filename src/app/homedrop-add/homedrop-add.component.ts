import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homedrop-add',
  templateUrl: './homedrop-add.component.html',
  styleUrls: ['./homedrop-add.component.css']
})
export class HomedropAddComponent implements OnInit {

  dropFrom :FormGroup
  constructor(private formBuilder: FormBuilder, private bs:AuthService,private route: ActivatedRoute,private router: Router) {
    this.createdropFrom();
   }

   createdropFrom(){
    this.dropFrom = this.formBuilder.group({
      country_name: [''],  
      state_name: [''],
      district_name:['']
    });
  }

  onSubmit() {
    console.log(this.dropFrom.value);
    var data= this.dropFrom.value
    this.bs.adddrop(data)
    this.router.navigate(['homedrop']);
}


  ngOnInit(): void {
  }

}
