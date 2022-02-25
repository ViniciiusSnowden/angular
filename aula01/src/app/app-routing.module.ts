import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { Componente5Component } from './componente5/componente5.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex4Component } from './ex4/ex4.component';
import { Ex5Component } from './ex5/ex5.component';

const routes: Routes = [
  {path:'componente1', component:Componente1Component},
  {path:'componente2', component:Componente2Component},
  {path:'componente3', component:Componente3Component},
  {path:'componente4', component:Componente4Component},
  {path:'componente5', component:Componente5Component},
  {path:'ex1', component:Ex1Component},
  {path:'ex2', component:Ex2Component},
  {path:'ex3', component:Ex3Component},
  {path:'ex4', component:Ex4Component},
  {path:'ex5', component:Ex5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
