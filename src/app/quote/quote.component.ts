import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myQuotes:Quote[] =[
    new Quote(1,"Your dreams don't have to be lofty; they just have to be lived.","-Kelly Bouchard","Grace"),
    new Quote(2,"Description begins in the writer’s imagination but should finish in the reader’s.","-Stephen King","Grace"),
    new Quote(3,"You can’t wait for inspiration. You have to go after it with a club.","-Jack London","Grace"),
    new Quote(4,"Taking care of yourself makes you stronger for everyone in your life including you.","-Kelly Rudolph","Grace"),
    new Quote(5,"Faith is taking the first step even when you don't see the full staircase","-Martin Luther King","Grace"),
 ];
 addNewQuote(qs){
  let quoteLength = this.myQuotes.length;
  qs.id = quoteLength+1;
  this.myQuotes.push(qs)
}
deleteQuote(toDelete,index){
  if (toDelete) {
    let delQuote = confirm(`Are you sure you want to delete ${this.myQuotes[index].statement}?`)

    if (delQuote){
      this.myQuotes.splice(index,1)
    }
  }
}
toggleDetails(index) {
  this.myQuotes[index].showVotes = !this.myQuotes[index].showVotes;
}

  constructor() { }

  ngOnInit(): void {
  }

}
