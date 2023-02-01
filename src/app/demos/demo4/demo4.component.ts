import { Component } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component {
  currentStyle: any = {};

  isBold: boolean = false;
  isItalic: boolean = false;
  isBig: boolean = false;

  isActive: boolean = false;

  setCurrentStyle(){
    this.currentStyle = {
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-size': this.isBig ? '32px' : '16px'
    }
  }

  toggleItalic() {
    this.isItalic = !this.isItalic;
    this.setCurrentStyle();
  }

  toggleBig() {
    this.isBig = !this.isBig;
    this.setCurrentStyle();
  }

  toggleBold() {
    this.isBold = !this.isBold;
    this.setCurrentStyle();
  }

}
