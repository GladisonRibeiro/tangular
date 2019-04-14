import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter 
} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  @Input() value: number;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddValue()
  {
    this.value++;
    this.valueChange.emit(this.value);
  }

  onSubValue() 
  {
    this.value--;
    this.valueChange.emit(this.value);
  }

}
