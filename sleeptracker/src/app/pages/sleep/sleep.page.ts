import { Component, OnInit } from '@angular/core';
import { SleepService } from '../../services/sleep.service';
import { OvernightSleepData } from '../../data/overnight-sleep-data';

import { Share } from '@capacitor/share';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.page.html',
  styleUrls: ['./sleep.page.scss'],
})
export class SleepPage implements OnInit {
  startTime: string;
  endTime: string;

  constructor(public sleepService: SleepService) {}

  ngOnInit() {}

  get allOvernightData() {
    return SleepService.AllOvernightData;
  }

  /*Record sleep data*/
  logSleep() {
    if (this.startTime && this.endTime) {
      this.sleepService.logOvernightData(
        new OvernightSleepData(new Date(this.startTime), new Date(this.endTime))
      );
    }
  }

  async shareSleep() {
    if (this.startTime && this.endTime) {
      var sleepData = new OvernightSleepData(
        new Date(this.startTime),
        new Date(this.endTime)
      );
      await Share.share({
        title: 'Overnight Sleep Data',
        text:
          'I slept ' +
          sleepData.summaryString() +
          ' at the ' +
          sleepData.dateString(),
      }).catch((error) => {});
    }
  }
}
