import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PkmTopBarComponent } from './pkm-top-bar/pkm-top-bar.component';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import { PkmFavButtonComponent } from './pkm-fav-button/pkm-fav-button.component';
import { BadgeModule } from "primeng/badge";
import { PkmButtonComponent } from './pkm-button/pkm-button.component';
import { PkmCardComponent } from './pkm-card/pkm-card.component';

@NgModule({
  declarations: [
    PkmTopBarComponent,
    PkmFavButtonComponent,
    PkmButtonComponent,
    PkmCardComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    BadgeModule
  ],
  exports: [PkmTopBarComponent, PkmFavButtonComponent, PkmButtonComponent, PkmCardComponent]
})
export class ComponentsModule { }
