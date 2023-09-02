import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManutencaoService } from '../service/manutencao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Manutencao } from 'src/app/shared/models/manutencao.model';

@Component({
  selector: 'app-editar-manutencao',
  templateUrl: './editar-manutencao.component.html',
  styleUrls: ['./editar-manutencao.component.css']
})
export class EditarManutencaoComponent implements OnInit {
  @ViewChild("formManutencao") formManutencao! : NgForm;
  manutencao!: Manutencao;
  
  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    // Operador + (antes do this) converte para número
  let id = +this.route.snapshot.params['id'];
    // Com o id, obtém a manutencao
  const res = this.manutencaoService.buscarPorId(id);
  if (res !== undefined){
    this.manutencao = res;
  } else {
    throw new Error ("Peça não encontrada: id = " + id);
    }
  }

  constructor(
    private manutencaoService: ManutencaoService,
    private route: ActivatedRoute,
    private router: Router) { }

    atualizar(): void {
      // Verifica se o formulário é válido
      if (this.formManutencao.form.valid) {
      // Efetivamente atualiza a manutencao
      this.manutencaoService.atualizar(this.manutencao);
      // Redireciona para /manutencao/listar
      this.router.navigate(['/manutencao']);
      }
      }
}
