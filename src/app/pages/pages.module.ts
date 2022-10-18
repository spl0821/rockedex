import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import {ButtonModule} from 'primeng/button';
import { ComponentsModule } from '../components/components.module';
import { SkeletonModule } from 'primeng/skeleton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    DashboardComponent,
    DetailComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ButtonModule,
    ComponentsModule,
    SkeletonModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ]
})
export class PagesModule { }
