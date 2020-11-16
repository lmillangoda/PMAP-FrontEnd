import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ApiCallServiceService } from 'app/services/api-call-service.service';
import * as Chartist from 'chartist';
import {
  MatTableDataSource
} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private apiCallServiceService: ApiCallServiceService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  dataSource: MatTableDataSource < any[] > = new MatTableDataSource();
  readsObs: Observable<any[]>;
  subscription: Subscription;
  
  ngOnInit(): void {
    this.subscription = this.apiCallServiceService.currentSub.subscribe(resp => {
      if (resp) {
        const series = resp;
        this.drawChart(resp, []);
      }
    });
    this.apiCallServiceService.readings.subscribe(resp => {
      if (resp) {
        this.dataSource.data = resp;
        this.dataSource.paginator = this.paginator;
        this.readsObs = this.dataSource.connect();
        this.cdr.detectChanges();
      }
    });
  }

  drawChart(seriess: any[], labels: string[]) {
    var currentChart = new Chartist.Line('#currentChart', {
      labels: [],
      series: [
        seriess
      ]
    }, {
      high: 350,
      low: -300,
      height: 500,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showLabel: false,
        showGrid: false
      },
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
    }),
    chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
    });

    this.startAnimationForLineCurrentChart(currentChart);

    }

    startAnimationForLineCurrentChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {

      });

      seq = 0;
  };
}
