import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiCallServiceService } from 'app/services/api-call-service.service';
import * as Chartist from 'chartist';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-voltage',
  templateUrl: './voltage.component.html',
  styleUrls: ['./voltage.component.css']
})
export class VoltageComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource < any[] > = new MatTableDataSource();
  readsObs: Observable<any[]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  subscription: Subscription;
  
  constructor(
    private apiCallServiceService: ApiCallServiceService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.apiCallServiceService.voltageSub.subscribe(resp => {
      if (resp) {
        const series = resp;
        this.drawChart(resp, []);
      }
    });
    this.apiCallServiceService.readings.subscribe(resp => {
      if (resp) {
        console.log('tab', resp);
        this.dataSource.data = resp;
        this.dataSource.paginator = this.paginator;
        this.readsObs = this.dataSource.connect();
        this.cdr.detectChanges();
      }
    });
  }

  drawChart(seriess: any[], labels: string[]) {
    var currentChart = new Chartist.Line('#voltageChart', {
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
