import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'public-feed',
        loadChildren: () => import('./public-feed/public-feed.module').then(m => m.PublicFeedModule)
      }
    ]
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

// const routes: Routes = [
//   {
//     path: 'public-feed',
//     loadChildren : () => import('./public-feed/public-feed.module').then(m => m.PublicFeedModule)
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
    }
  )],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
