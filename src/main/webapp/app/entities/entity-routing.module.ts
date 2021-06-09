import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'produto',
        data: { pageTitle: 'acaiValleyApp.produto.home.title' },
        loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
