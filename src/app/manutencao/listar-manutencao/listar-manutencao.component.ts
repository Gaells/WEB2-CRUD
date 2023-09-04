import { Component } from '@angular/core';
import { ManutencaoService } from '../service/manutencao.service';
import { Manutencao } from 'src/app/shared/models/manutencao.model';


@Component({
  selector: 'app-listar-manutencao',
  templateUrl: './listar-manutencao.component.html',
  styleUrls: ['./listar-manutencao.component.css']
})
export class ListarManutencaoComponent{

  manutencao: Manutencao[] = [];

  constructor(private manutencaoService : ManutencaoService) {}

  ngOnInit(): void {  
    this.manutencao = this.listarTodos();
  }

  listarTodos(): Manutencao[] {
    return this.manutencaoService.listarTodos();
  }

  remover($event: any, manutencao: Manutencao): void {
    $event.preventDefault();
      if (confirm(`Deseja realmente remover a peça: ${manutencao.peca}?`)) {
      this.manutencaoService.remover(manutencao.id!);
      this.manutencao = this.listarTodos();
      }
    }
}
