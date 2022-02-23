import { Component, OnInit } from '@angular/core';
import { SleepService } from '../../services/sleep.service';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';

import { Share } from '@capacitor/share';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  level: number;
  scale: string[];

  constructor(public sleepService: SleepService) {}

  ngOnInit() {
    this.scale = StanfordSleepinessData.ScaleValues;
  }

  get allSleepinessData() {
    return SleepService.AllSleepinessData;
  }

  /*Record sleepiness data*/
  logSleepiness() {
    if (this.level) {
      this.sleepService.logSleepinessData(
        new StanfordSleepinessData(this.level)
      );
    }
  }

  async shareSleepiness() {
    if (this.level) {
      var sleepinessData = new StanfordSleepinessData(this.level);
      await Share.share({
        title: 'Stanford Sleepiness Data',
        text:
          'I felt ' +
          sleepinessData.summaryString() +
          ' on ' +
          sleepinessData.dateString(),
      }).catch((error) => {});
    }
  }
}
