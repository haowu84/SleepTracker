import { Component, OnInit } from '@angular/core';
import { SleepService } from '../../services/sleep.service';

@Component({
  selector: 'app-sleep-data',
  templateUrl: './sleep-data.page.html',
  styleUrls: ['./sleep-data.page.scss'],
})
export class SleepDataPage implements OnInit {
  sleep: boolean;
  sleepiness: boolean;
  constructor(public sleepService: SleepService) {}

  ngOnInit() {}

  /*Retrieve all sleep data*/
  get allSleepData() {
    return SleepService.AllSleepData;
  }

  /*Retrieve overnight sleep data only*/
  get allOvernightData() {
    return SleepService.AllOvernightData;
  }

  /*Retrieve sleepiness data only*/
  get allSleepinessData() {
    return SleepService.AllSleepinessData;
  }
}
