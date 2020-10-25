
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  
 @Input() quote:Quote
 @Output() toDelete = new EventEmitter<Boolean>();

 quoteDelete(complete:boolean){
  this.toDelete.emit(complete);
 }
  
  likes:number=0;
  dislikes:number=0;

  likeBtn(){
    this.likes++;
  }
  dislikeBtn(){
    this.dislikes++;
  }


  
  constructor() { }

  ngOnInit(): void {
  }

}
