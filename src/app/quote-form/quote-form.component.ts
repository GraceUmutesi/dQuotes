import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
   
  newQuote = new Quote(0,"","","", new Date());
  @Output() emitQuote = new EventEmitter<Quote>();


  submitQuote(){
    this.emitQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
