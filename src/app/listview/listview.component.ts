import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['../app.component.css']
})
export class ListviewComponent implements OnInit {
  @Input() items: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
