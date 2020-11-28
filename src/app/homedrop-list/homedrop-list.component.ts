import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import  dropdata  from '../drop'

@Component({
  selector: 'app-homedrop-list',
  templateUrl: './homedrop-list.component.html',
  styleUrls: ['./homedrop-list.component.css']
})
export class HomedropListComponent implements OnInit {

  drop :dropdata[]

  constructor(private bs:AuthService) { }

  ngOnInit(): void {
    this.bs.getdrop().subscribe((data: dropdata[]) =>{
      this.drop = data
    })
  }

  deletedrop(id) {
    this.bs.deletedrop(id).subscribe(res => {
      console.log('Deleted');
      window.location.reload();
    });
    
  }

}
