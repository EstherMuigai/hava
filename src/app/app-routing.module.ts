import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { ResultsComponent } from "./results/results.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  {
    path:"",
    redirectTo:"/search",
    pathMatch:"full"
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'trip/search/results/:keyword/:distance/:time', 
    component: ResultsComponent
  },
  {
    path: 'trip/details/:id', 
    component: DetailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
