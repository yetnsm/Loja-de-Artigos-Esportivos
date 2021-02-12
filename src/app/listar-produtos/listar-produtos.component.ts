import { Component, OnInit } from '@angular/core';
import { Produto } from "../model/produto";
import { ProdutoService } from '../model/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  constructor(private prod: ProdutoService) { }

  produtos: Produto[];

  ngOnInit() {
    this.produtos = [];
    this.buscarProdutos();
  }

  // exercicio 1
  buscarProdutos() {
    return this.prod.buscarProdutos().subscribe(
      (res) => {
        this.produtos = res;
      }
    );
  }

  // exercicio 3
  deletarProduto(id: number): any {
    this.prod.deletarProduto(id).subscribe(
      (res) => {
        this.produtos = res.prods;
      }
    );
  }
}