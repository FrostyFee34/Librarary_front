import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksPageComponent } from './books-page.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookListItemComponent } from './components/book-list-item/book-list-item.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { CoreModule } from '../core/core.module';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
	declarations: [
		BooksPageComponent,
		BookListComponent,
		BookListItemComponent,
		EditBookComponent,
		ViewBookComponent,
	],
	imports: [
		CommonModule,
		CoreModule,
		MatListModule,
		MatCardModule,
		MatButtonModule,
		MatGridListModule,
		ScrollingModule,
	],
	exports: [BooksPageComponent],
})
export class BooksModule {}
