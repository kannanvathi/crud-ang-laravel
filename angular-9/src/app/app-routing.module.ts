import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListviewComponent } from './listview/listview.component';
import { CreateviewComponent } from './createview/createview.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdateviewComponent } from './updateview/updateview.component';


export const routes: Routes = [
  {path:'', component:ListviewComponent},
  {path:'create', component:CreateviewComponent},
  {path:'update/:id', component:UpdateviewComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ListviewComponent, CreateviewComponent]