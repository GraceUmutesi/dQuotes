
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  
 
  
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
