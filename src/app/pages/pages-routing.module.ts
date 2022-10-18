import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DetailComponent } from "./detail/detail.component";
import { FavoritesComponent } from "./favorites/favorites.component";

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail',
        component: DetailComponent
    },
    {
        path: 'favorites',
        component: FavoritesComponent
    },
    {
        path: '**',
        component: DashboardComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }