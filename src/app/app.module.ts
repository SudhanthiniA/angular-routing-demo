import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DepartmentaddComponent } from './departmentadd/departmentadd.component';
// import { DepartmentlistComponent } from './departmentlist/departmentlist.component';

import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { FilterpipePipe } from './filterpipe/filterpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // DepartmentlistComponent,
    routingComponent,
    EditComponent,
    ViewComponent,
    FilterpipePipe
    // DepartmentaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
