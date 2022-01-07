import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddEmployeeComponent } from "../app/add-employee/add-employee.component"
import {HeaderComponent} from "../app/component/header.component"
import { DashBoardComponent } from "./dash-board/dash-board.component";


const routes :Routes=[
    {path: '', redirectTo:'dashboard', pathMatch:'full'},
    {path:'empForm', component:AddEmployeeComponent},
    {path:'empheader', component:HeaderComponent},
    {path:'dashboard', component:DashBoardComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [AddEmployeeComponent]