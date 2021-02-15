import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ProdutoService {
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = "https://projeto.yetnsm.repl.co/";
  }

  buscarProdutos(): Observable<any> {
    return this.http.get<any>(`${this.URL}produtos`);
  }

  buscarProduto(id): Observable<any> {
    return this.http.get<any>(`${this.URL}buy/:id`);
  }

  deletarProduto(id: number): Observable<any> {
    if (id == undefined) {
      alert("Nenhum produto encontrado.");
    }
    return this.http.delete<any>(`${this.URL}produtos/${id}`);
  }

  comprar(id: number): Observable<any> {
    if (id == undefined) {
      alert("Nenhum produto encontrado.");
    } else {
      return this.http.post<any>(`${this.URL}buy`, id);
    }
  }

  adicionar(
    n: HTMLInputElement,
    d: HTMLInputElement,
    p: HTMLInputElement,
    e: HTMLInputElement,
    f: HTMLInputElement
  ): Observable<any> {
    if (n.value != "" && d.value != "" && p.value != "" && e.value != "" && f.value != "") {
      let novo = [n.value, d.value, p.value, e.value, f.value]
      return this.http.post<any>(`${this.URL}insert`, novo);
    } else {
      alert("Preencha todos os campos do formulário.");
    }
  }
}
