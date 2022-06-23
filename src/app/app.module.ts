import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';
import { BlockItemComponent } from './block-item/block-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    BlockItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
