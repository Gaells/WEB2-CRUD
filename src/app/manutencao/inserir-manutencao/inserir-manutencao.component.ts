import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Manutencao } from 'src/app/shared/models/manutencao.model';
import { ManutencaoService } from '../service/manutencao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-manutencao',
  templateUrl: './inserir-manutencao.component.html',
  styleUrls: ['./inserir-manutencao.component.css']
})
export class InserirManutencaoComponent implements OnInit {
  @ViewChild('formManutencao') formManutencao! : NgForm;
  manutencao! : Manutencao;
peca: any;

  constructor(private manutencaoService : ManutencaoService,
    private router : Router) { }

  ngOnInit(): void {
      this.manutencao = new Manutencao();
  }

  inserir(): void {
    if (this.formManutencao.form.valid) {
    this.manutencaoService.inserir(this.manutencao);
    this.router.navigate( ["/manutencao/listar"] );
    }
    }

}
