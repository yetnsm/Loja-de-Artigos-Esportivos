import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../model/produto.service';

@Component({
  selector: 'app-comprar-produto',
  templateUrl: './comprar-produto.component.html',
  styleUrls: ['./comprar-produto.component.css']
})
export class ComprarProdutoComponent implements OnInit {

  constructor(private prod: ProdutoService) { }
  produto: Produto;
  route;

  ngOnInit() {
    this.produto = null;

    let id;
    this.route.paramMap.subscribe(params => {
      id = params.get(0)
    });
    alert(id);

    this.buscarProduto(id);
  }

  buscarProduto(id) {
    alert(id);
    return this.prod.buscarProduto(id).subscribe(
      (res) => {
        this.produto = res[0];
        alert(this.produto);
      }
    );
  }

  comprar(id) {
    return this.prod.comprar(id).subscribe(
      (res) => {
        this.produto = res;
      }
    );
  }

}