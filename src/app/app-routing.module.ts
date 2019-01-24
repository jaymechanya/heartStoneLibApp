import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'card-detail', loadChildren: './card/card-detail/card-detail.module#CardDetailPageModule' },

  // { path: 'card-listing', loadChildren: './card/card-listing/card-listing.module#CardListingPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
