import { Component, OnInit, ViewChild } from '@angular/core';
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
  showModalBox: boolean = false;

  ngOnInit() {
    this.produtos = [];
    this.buscarProdutos();
  }

  buscarProdutos() {
    return this.prod.buscarProdutos().subscribe(
      (res) => {
        this.produtos = res;
      }
    );
  }

  deletarProduto(id: number): any {
    this.prod.deletarProduto(id).subscribe(
      (res) => {
        this.produtos = res.prods;
      }
    );
  }

  public open() {
     if(0) {
       this.showModalBox = false;
     } else {
        this.showModalBox = true;
     }
   }
}