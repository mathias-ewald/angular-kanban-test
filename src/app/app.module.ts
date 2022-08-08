import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KanbanBoardModule } from './kanban/kanban.module';

@NgModule({
  imports: [BrowserModule, FormsModule, KanbanBoardModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
