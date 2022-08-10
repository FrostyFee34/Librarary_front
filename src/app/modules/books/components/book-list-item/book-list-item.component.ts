import { Component, Input, OnInit } from '@angular/core';
import { IBookOverview } from '../../models/bookOverview';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})

export class BookListItemComponent implements OnInit {
  @Input() bookOverview?: IBookOverview;
  constructor() { }

  ngOnInit(): void {
  }

}
