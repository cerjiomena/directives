import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color = 'red';
  }

}
