import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { SearchRequestModel } from '../models/search-request-model';
import { ReadingResponse } from '../models/reading-response';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { FrequencyFaultResponse } from 'app/models/frequency-fault-response';
import { VoltageFaultResponse } from 'app/models/voltage-fault-response';
import { CurrentFaultResponse } from 'app/models/current-fault-response';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiCallServiceService {
  BASR_URL = 'http://localhost:8080'
  constructor(private http:HttpClient) { }

  public currentSub: Subject<any[]> = new Subject<any[]>();
  public voltageSub: Subject<any[]> = new Subject<any[]>();
  public frequencySub: Subject<any[]> = new Subject<any[]>();
  public powerSub: Subject<any[]> = new Subject<any[]>();
  public readings: Subject<any[]> = new Subject<any[]>();

  searchReadings(request: SearchRequestModel): Observable<any> {
    return this.http.post<ReadingResponse[]>(this.BASR_URL + '/pmap/get-readings', request);
  }

  searchCurrentFaults(request: SearchRequestModel): Observable<any> {
    return this.http.post<CurrentFaultResponse[]>(this.BASR_URL + '/pmap/get-current-faults', request);
  }

  searchVoltageFaults(request: SearchRequestModel): Observable<any> {
    return this.http.post<VoltageFaultResponse[]>(this.BASR_URL + '/pmap/get-voltage-faults', request);
  }

  searchFrequencyFaults(request: SearchRequestModel): Observable<any> {
    return this.http.post<FrequencyFaultResponse[]>(this.BASR_URL + '/pmap/get-frequency-faults', request);
  }

}
