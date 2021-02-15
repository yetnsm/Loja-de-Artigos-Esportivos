import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';
import { ComprarProdutoComponent } from './comprar-produto/comprar-produto.component';
import { FinalizarComponent } from './finalizar/finalizar.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'catalog', component: ListarProdutosComponent },
      { path: 'buy/:id', component: ComprarProdutoComponent },
      { path: 'insert', component: InserirProdutoComponent },
      { path: 'finalizar', component: FinalizarComponent },
      { path: 'adicionar', component: AdicionarComponent },
      { path: '**', redirectTo: 'catalog' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}