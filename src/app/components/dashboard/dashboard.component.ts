import { Component, OnInit } from '@angular/core';
import { ApiCallServiceService } from 'app/services/api-call-service.service';
import * as Chartist from 'chartist';
import {Observable} from 'rxjs/Observable';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiCallServiceService: ApiCallServiceService) { }
  readers: any = [];
  selectedReader: string;
  
  ngOnInit() {
   interval(1000).subscribe(() => {
       const to = new Date();
       let from = new Date();
       from.setMinutes((from.getMinutes()-10));
       const toDate = to.toISOString();
       const fromDate = from.toISOString();
      const request = {
        read_date_from: fromDate,
        read_date_to: toDate,
      }
      console.log('apical1l', request);
      this.apiCallServiceService.searchReadings(request).subscribe(resp => {
        console.log('apicall', resp);
        if (resp && resp.length > 0) {
          const current = [];
          const voltage = [];
          const frequency = [];
          const power = [];
          resp.sort((a, b) => b.read_at - a.read_at);
          console.log(resp);
          resp.forEach(element => {
            current.push(element.current);
            voltage.push(element.voltage);
            frequency.push(element.frequency);
            power.push(element.power);
          });
          this.apiCallServiceService.currentSub.next(current);
          this.apiCallServiceService.voltageSub.next(voltage);
          this.apiCallServiceService.frequencySub.next(frequency);
          this.apiCallServiceService.powerSub.next(power);
          this.apiCallServiceService.readings.next(resp);
        }
      });
     
   });



}


}
