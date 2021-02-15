import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';

@NgModule({
  declarations: [ 
    ListarProdutosComponent, InserirProdutoComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'catalog', component: ListarProdutosComponent },
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