import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[InputFormat]'
})
export class InputFormatDirective {

  @Input('format') format="";
  constructor(private ref: ElementRef) { }


 @HostListener('focus') onFocus(){
  console.log('onFocus')
  }


  @HostListener('blur') onBlur() {
    console.log('onBlur')
    let getvalue:string=this.ref.nativeElement.value;
    if(this.format==="A")
    this.ref.nativeElement.value=getvalue.toUpperCase();
    else
    this.ref.nativeElement.value=getvalue.toLowerCase();
  }

}
