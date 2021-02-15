import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';
import { ComprarProdutoComponent } from './comprar-produto/comprar-produto.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'catalog', component: ListarProdutosComponent },
      { path: 'buy/:id', component: ComprarProdutoComponent },
      { path: 'insert', component: InserirProdutoComponent },
      { path: '**', redirectTo: 'catalog' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}