import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { IBook } from '../../models/book';
import { BooksService } from '../../services/books.service';

@Component({
	selector: 'app-edit-book',
	templateUrl: './edit-book.component.html',
	styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
	@Input() id?: number;
	bookObservable$: Observable<IBook | null> | undefined;
	book: IBook | null | undefined;
	bookForm = this.formBuilder.group({
		title: '',
		author: '',
		cover: '',
		content: '',
		genre: '',
	});

	constructor(
		private bookService: BooksService,
		private formBuilder: FormBuilder
	) {}

	ngOnInit(): void {
		if (this.id) {
			this.getBook(this.id);
			this.bookObservable$?.subscribe((response) => (this.book = response));
			if (this.book) {
				let value = {
					title: this.book.title,
					author: this.book.author,
					genre: this.book.genre,
					cover: '',
					content: '',
				};
				if (this.book.cover) {
					value.cover = this.book.cover;
				}
				if (this.book.content) {
					value.content = this.book.content;
				}
				this.bookForm.setValue(value);
			}
		}

	}

	getBook(id: number) {
		this.bookObservable$ = this.bookService.getBookById(id);
	}

	onSubmit() {
		console.log(this.bookForm.value);
	}

	onReset() {
		this.bookObservable$ = undefined;
		this.bookForm.reset();
		this.id = undefined;
	}
}
