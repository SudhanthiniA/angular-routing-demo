import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { DepartmentaddComponent } from './departmentadd/departmentadd.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: 'list', component: DepartmentlistComponent},
  {path: 'add', component: DepartmentaddComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'view/:id', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentlistComponent, DepartmentaddComponent] 
