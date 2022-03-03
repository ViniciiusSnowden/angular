import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RotaGuard } from './rota.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'principal', component:PrincipalComponent, canActivate:[RotaGuard] },
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
