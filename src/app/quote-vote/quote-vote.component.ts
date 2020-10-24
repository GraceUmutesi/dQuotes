import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  // img1:string="assets/images/ThumbsUp.png";
  // img2:string="assets/images/ThumbsDown.png"
  
  
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
