
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  
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
