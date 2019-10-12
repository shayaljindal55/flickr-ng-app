import { NgModule } from '@angular/core';
import { PublicFeedComponent } from './public-feed.component';
import { PublicFeedRoutingModule } from './public-feed-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        PublicFeedComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PublicFeedRoutingModule,
        FormsModule, ReactiveFormsModule
    ],
    exports: [
    ],
    providers: [],
    bootstrap: []
})
export class PublicFeedModule { }
