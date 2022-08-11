import { IReview } from './Review';

export interface IBook {
	id: number;
	title: string;
	author: string;
	cover?: string;
	genre: string
	content?: string;
	rating: number;
	reviews: IReview[];
}
