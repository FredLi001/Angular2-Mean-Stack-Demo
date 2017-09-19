
import {Routes} from "@angular/router";
import {UserBookTableComponent} from "./user-book-table/user-book-table.component";
import {UserEditTableComponent} from "./user-edit-table/user-edit-table.component";
export const AUTH_ROUTES: Routes =[
  {path:'',redirectTo:'book',pathMatch:'full'},
  {path:'book', component:UserBookTableComponent},
  {path:'edit', component:UserEditTableComponent},
];
