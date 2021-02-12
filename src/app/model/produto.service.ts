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

  deletarProduto(id: number): Observable<any> {
    if(id == undefined) {
      alert("Nenhum produto encontrado.");
    }
    return this.http.delete<any>(`${this.URL}produtos/${id}`);
  }
}