import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { ProdutoService } from '../model/produto.service';

@Component({
  selector: 'app-comprar-produto',
  templateUrl: './comprar-produto.component.html',
  styleUrls: ['./comprar-produto.component.css']
})
export class ComprarProdutoComponent implements OnInit {

  constructor(private prod: ProdutoService, private route: ActivatedRoute) { }
  produto: Produto;

  id: any;

  ngOnInit() {
    this.produto = null;

    this.id = this.route.snapshot.paramMap.get('id');
    this.buscarProduto(this.id);
  }

  buscarProduto(id) {
    return this.prod.buscarProduto(id).subscribe(
      (res) => {
        this.produto = res;
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