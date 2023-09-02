import { NgModule } from '@angular/core';
import { ManutencaoService } from '../manutencao/service/manutencao.service';
import { ListarManutencaoComponent } from '../manutencao/listar-manutencao/listar-manutencao.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirManutencaoComponent } from '../manutencao/inserir-manutencao/inserir-manutencao.component';
import { EditarManutencaoComponent } from '../manutencao/editar-manutencao/editar-manutencao.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ListarManutencaoComponent,
    InserirManutencaoComponent,
    EditarManutencaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ManutencaoService
  ]
})
export class ManutencaoPecasModule { }
