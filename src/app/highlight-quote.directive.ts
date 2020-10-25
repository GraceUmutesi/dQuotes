
import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  constructor(private element:ElementRef) { }

  highlightText(){
    this.element.nativeElement.style.backgroundColor='green'
  }
  
}
