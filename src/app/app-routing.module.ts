import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: "",
  redirectTo: "home",
  //component: HomeComponent
  pathMatch: "full"
},
{
  path: "apply",
  component: ApplyComponent
},
{
  path: "home",
  component: HomeComponent
}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
