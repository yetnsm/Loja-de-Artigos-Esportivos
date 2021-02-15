import { Component, OnInit } from "@angular/core";
import { Produto } from "../model/produto";
import { ProdutoService } from "../model/produto.service";

@Component({
  selector: "app-inserir-produto",
  templateUrl: "./inserir-produto.component.html",
  styleUrls: ["./inserir-produto.component.css"]
})
export class InserirProdutoComponent implements OnInit {
  constructor(private prod: ProdutoService) {}
  produtos: Produto[];

  ngOnInit() {
    this.produtos = [];
  }

  adicionar(
    n: HTMLInputElement,
    d: HTMLInputElement,
    p: HTMLInputElement,
    e: HTMLInputElement,
    f: HTMLInputElement
  ) {
    this.prod.adicionar(n, d, p, e, f).subscribe(res => {
      this.produtos = res.prods;
    });
  }
}
