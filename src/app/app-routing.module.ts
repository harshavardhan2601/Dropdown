import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HomedropAddComponent } from './homedrop-add/homedrop-add.component';
import { HomedropListComponent } from './homedrop-list/homedrop-list.component';
import { StateComponent } from './state/state.component';

const routes: Routes = [
  {path:'drop',component:DropdownComponent},
  {path:'homedrop',component:HomedropListComponent},
  {path:'addhomedrop', component:HomedropAddComponent},
  {path:'file', component:StateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
