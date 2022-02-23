import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class SleepService {
  private static LoadDefaultData: boolean = true;
  public static AllSleepData: SleepData[] = [];
  public static AllOvernightData: OvernightSleepData[] = [];
  public static AllSleepinessData: StanfordSleepinessData[] = [];

  private ionic_storage: Storage;

  constructor(private storage: Storage) {
    if (SleepService.LoadDefaultData) {
      this.addDefaultData();
      SleepService.LoadDefaultData = false;
    }
    this.OnInit();
    //this.storage.clear();
    this.loadStoredData();
  }

  async OnInit() {
    this.ionic_storage = await this.storage.create();
  }

  private addDefaultData() {
    this.logOvernightData(
      new OvernightSleepData(
        new Date('February 18, 2021 01:03:00'),
        new Date('February 18, 2021 09:25:00')
      )
    );
    this.logSleepinessData(
      new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00'))
    );
    this.logOvernightData(
      new OvernightSleepData(
        new Date('February 20, 2021 23:11:00'),
        new Date('February 21, 2021 08:03:00')
      )
    );
  }

  /*add the data from ionic storage into the list*/
  private loadStoredData() {
    this.storage.forEach((value) => {
      var sleepData = value;
      if ('sleepStart' in sleepData) {
        sleepData = new OvernightSleepData(
          new Date(sleepData['sleepStart']),
          new Date(sleepData['sleepEnd'])
        );
        SleepService.AllOvernightData.push(sleepData);
      } else {
        sleepData = new StanfordSleepinessData(
          sleepData['loggedValue'],
          new Date(sleepData['loggedAt'])
        );
        SleepService.AllSleepinessData.push(sleepData);
      }
      SleepService.AllSleepData.push(sleepData);
    });
  }

  public logOvernightData(sleepData: OvernightSleepData) {
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllOvernightData.push(sleepData);
    this.ionic_storage?.set(
      SleepService.AllSleepData.length.toString(),
      sleepData.toObject()
    );
  }

  public logSleepinessData(sleepData: StanfordSleepinessData) {
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllSleepinessData.push(sleepData);
    this.ionic_storage?.set(
      SleepService.AllSleepData.length.toString(),
      sleepData.toObject()
    );
  }
}
