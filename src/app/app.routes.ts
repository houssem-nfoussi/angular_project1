import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
    {path:'About',component:AboutComponent},
    {path:'table',component:TableComponent}
];
