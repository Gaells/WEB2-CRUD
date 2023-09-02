import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarManutencaoComponent } from './manutencao/listar-manutencao/listar-manutencao.component';
import { InserirManutencaoComponent } from './manutencao/inserir-manutencao/inserir-manutencao.component';
import { EditarManutencaoComponent } from './manutencao/editar-manutencao/editar-manutencao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manutencao/listar',
    pathMatch: 'full'
  },
  {
    path: 'manutencao/listar',
    component: ListarManutencaoComponent
  },
  {
    path: 'manutencao/inserir',
    component: InserirManutencaoComponent
  },
  {
    path: 'manutencao/editar/:id',
    component: EditarManutencaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
