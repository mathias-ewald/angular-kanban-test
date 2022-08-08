import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanColumnComponent } from './kanban-column/kanban-column.component';
import { KanbanColumnHeaderComponent } from './kanban-column-header/kanban-column-header.component';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';

@NgModule({
  imports: [CommonModule, DragDropModule],
  declarations: [
    KanbanBoardComponent,
    KanbanColumnComponent,
    KanbanColumnHeaderComponent,
    KanbanCardComponent,
  ],
  exports: [
    KanbanBoardComponent,
    KanbanColumnComponent,
    KanbanColumnHeaderComponent,
    KanbanCardComponent,
  ],
})
export class KanbanBoardModule {}
