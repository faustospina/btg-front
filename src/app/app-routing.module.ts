import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AddComponent } from './pages/clientes/add/add.component';
import { FondosComponent } from './pages/fondos/fondos.component';
import { AddFondoComponent } from './pages/fondos/add-fondo/add-fondo.component';
import { EditComponent } from './pages/clientes/edit/edit.component';
import { ClientesFondosComponent } from './pages/clientes-fondos/clientes-fondos.component';

const routes: Routes = [
  {path:'home',component:ClientesComponent},
  {path:'cliente-add',component:AddComponent},
  {path:'cliente-edit/:id',component:EditComponent},
  {path:'fondos',component:FondosComponent},
  {path:'fondo-add',component:AddFondoComponent},
  {path:'asignar-fondos',component:ClientesFondosComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
