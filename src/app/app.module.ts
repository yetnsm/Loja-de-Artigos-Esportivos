import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProdutoService } from './model/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { ComprarProdutoComponent } from './comprar-produto/comprar-produto.component';
import { FinalizarComponent } from './finalizar/finalizar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, InserirProdutoComponent, ListarProdutosComponent, ComprarProdutoComponent, FinalizarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProdutoService]
})
export class AppModule { }
