import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './components/listar/listar.component';
import { UsuariosCrudComponent } from './components/usuarios-crud/usuarios-crud.component';

const routes: Routes = [{
  path: "",
  component: ListarComponent
},
{
  path: "usuarios",
  component: UsuariosCrudComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
