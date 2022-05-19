import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['../app.component.css']
})
export class RecieverComponent implements OnInit {
  @Input() text: string[];
  @Input() newValue: string;
  @Output() newValueChange = new EventEmitter<string>();
  @Output() onclick = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

  onInput(value){
    this.newValue = value;
    this.newValueChange.emit(this.newValue)
  }

  onCLick() {
    this.onclick.emit()
  }
}
