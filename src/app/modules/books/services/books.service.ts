import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IBookOverview } from '../models/bookOverview';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { of, map } from 'rxjs';
import { IBook } from '../models/book';

@Injectable({
	providedIn: 'root',
})
export class BooksService {
	baseUrl = environment.apiUrl;
	// bookInEditObservable
	constructor(private http: HttpClient) {}

	getBooks(orderBy?: string) {
		let httpParams = new HttpParams();
		if (orderBy) {
			httpParams = httpParams.append('order', orderBy);
		}
		return this.http
			.get<IBookOverview[]>(this.baseUrl + 'books', {
				observe: 'response',
				params: httpParams,
			})
			.pipe(
				map((response) => {
					return response.body;
				})
			);
	}

	getRecommendedBooks(genre?: string) {
		let httpParams = new HttpParams();
		if (genre) {
			httpParams = httpParams.append('genre', genre);
		}
		return this.http
			.get<IBookOverview[]>(this.baseUrl + 'recommended', {
				observe: 'response',
				params: httpParams,
			})
			.pipe(
				map((response) => {
					return response.body;
				})
			);
	}

	getBookById(id: number) {
		return this.http
			.get<IBook>(this.baseUrl + 'books/id', { observe: 'response' })
			.pipe(
				map((response) => {
					return response.body;
				})
			);
	}
}
