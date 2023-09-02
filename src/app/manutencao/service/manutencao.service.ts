import { Injectable } from '@angular/core';

import { Manutencao } from 'src/app/shared/models/manutencao.model';

const LS_CHAVE: string = "Manutencao";

@Injectable({
  providedIn: 'root'
})
export class ManutencaoService {

  constructor() { }

  listarTodos(): Manutencao[] {
    const manutencaoPecas = localStorage[LS_CHAVE];
    // cond necessaria pois retorna undef se n achar chave
    return manutencaoPecas ? JSON.parse(manutencaoPecas) : [];
  }

  inserir(manutencao: Manutencao): void {
    const manutencaoPecas = this.listarTodos();

    manutencao.id = new Date().getTime();

    manutencaoPecas.push(manutencao);
    // add final da lista

    localStorage[LS_CHAVE] = JSON.stringify(manutencaoPecas);
  }

  buscarPorId(id:number): Manutencao | undefined {
    const manutencaoPecas: Manutencao[] = this.listarTodos();
    
    return manutencaoPecas.find(manutencao => manutencao.id === id);
  }

  atualizar(manutencao: Manutencao): void {
    const manutencaoPecas: Manutencao[] = this.listarTodos();


    manutencaoPecas.forEach( (obj, index, objs) => {
      if(manutencao.id === obj.id) {
        objs[index] = manutencao;
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(manutencaoPecas);
  }

  remover(id:number): void {
    let manutencaoPecas: Manutencao[] = this.listarTodos();

    manutencaoPecas = manutencaoPecas.filter(manutencao => manutencao.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(manutencaoPecas);
  }
}
