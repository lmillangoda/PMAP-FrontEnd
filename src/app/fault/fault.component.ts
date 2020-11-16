import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiCallServiceService } from 'app/services/api-call-service.service';
import { interval } from 'rxjs';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-fault',
  templateUrl: './fault.component.html',
  styleUrls: ['./fault.component.css'],
})
export class FaultComponent implements OnInit {
  currentDataSource: MatTableDataSource < any[] > = new MatTableDataSource();
  currentReadsObs: Observable<any[]>;

  voltageDataSource: MatTableDataSource < any[] > = new MatTableDataSource();
  voltageReadsObs: Observable<any[]>;

  frequencyDataSource: MatTableDataSource < any[] > = new MatTableDataSource();
  frequencyReadsObs: Observable<any[]>;

  @ViewChild("currentPaginator") currentPaginator: MatPaginator;
  @ViewChild("voltagePaginator") voltagePaginator: MatPaginator;
  @ViewChild("frequencyPaginator") frequencyPaginator: MatPaginator;
  
  constructor(
    private apiCallServiceService: ApiCallServiceService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      const to = new Date();
      let from = new Date();
      from.setMonth((from.getMonth()-1));
      const toDate = to.toISOString();
      const fromDate = from.toISOString();
     const request = {
       read_date_from: fromDate,
       read_date_to: toDate,
     }
     this.apiCallServiceService.searchCurrentFaults(request).subscribe(resp => {
      if (resp) {
        this.currentDataSource.data = resp;
        this.currentDataSource.paginator = this.currentPaginator;
        this.currentReadsObs = this.currentDataSource.connect();
        this.cdr.detectChanges();
      }
     });

     this.apiCallServiceService.searchVoltageFaults(request).subscribe(resp => {
      if (resp) {
        this.voltageDataSource.data = resp;
        this.voltageDataSource.paginator = this.voltagePaginator;
        this.voltageReadsObs = this.voltageDataSource.connect();
        this.cdr.detectChanges();
      }
    });

    this.apiCallServiceService.searchFrequencyFaults(request).subscribe(resp => {
      if (resp) {
        this.frequencyDataSource.data = resp;
        this.frequencyDataSource.paginator = this.frequencyPaginator;
        this.frequencyReadsObs = this.frequencyDataSource.connect();
        this.cdr.detectChanges();
      }
    });

  });

}

}
