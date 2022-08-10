import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBookOverview } from '../../models/bookOverview';
import { BooksService } from '../../services/books.service';

@Component({
	selector: 'app-book-list',
	templateUrl: './book-list.component.html',
	styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
	bookOverviewsObservable$: Observable<IBookOverview[] | null> | undefined;
	constructor(private booksService: BooksService) {}

	ngOnInit(): void {
		this.getAll()
	}

  getAll(){
    this.bookOverviewsObservable$ = this.booksService.getBooks();
  }
  getRecommended(){
    this.bookOverviewsObservable$ = this.booksService.getRecommendedBooks()
  }
}
