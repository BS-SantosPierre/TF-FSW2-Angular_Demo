import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent {
  // timer?: ReturnType<typeof setInterval>;
  timer: any;
  seconds: number = 0;

  start() {
    this.timer = setInterval(() => {
      this.seconds += 1;
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  reset() {
    // clearImmediate(this.timer);
    // this.timer = undefined;
    this.stop();
    this.seconds = 0;
  }

}
