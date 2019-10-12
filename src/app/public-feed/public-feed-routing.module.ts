import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicFeedComponent } from './public-feed.component';
const routes: Routes = [
    { path: '', component: PublicFeedComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicFeedRoutingModule {
}
