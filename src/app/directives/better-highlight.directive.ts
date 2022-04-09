import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})



export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @Input() defaultFontColor: string = 'blue';
  @Input() highlightFontColor: string = 'white';
  @HostBinding('style.backgroundColor') backgroundColorChoice: string = this.defaultColor;
  @HostBinding('style.color') colorChoice: string = this.defaultFontColor;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { 

  }

  ngOnInit(){
    this.backgroundColorChoice = this.defaultColor;
      // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue')
      // this.renderer.setStyle(this.elementRef.nativeElement,'color','white')
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    this.backgroundColorChoice = this.highlightColor;

    this.colorChoice = this.highlightFontColor;
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red')
  }
  @HostListener('mouseleave') mouseLeaving(eventData: Event){
    this.backgroundColorChoice = this.defaultColor;
    this.colorChoice = this.defaultFontColor;
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent')
  }

}
