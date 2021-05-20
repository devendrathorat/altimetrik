import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchdocumentComponent } from './searchdocument/searchdocument.component';


const routes: Routes = [{ path: '', redirectTo: '/searchAllDocument', pathMatch: 'full' },
{ path: 'searchAllDocument', component: SearchdocumentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
