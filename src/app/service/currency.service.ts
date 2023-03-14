import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseCurrencyDto} from "../dto/response.currency.dto";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {

  }
  public convertCurrency(from: string, to: string, amount: number): Observable<ResponseCurrencyDto> {
    return this.http.get<ResponseCurrencyDto>("http://localhost:8080/v1/change/coin?from=" + from + "&to=" + to + "&amount=" + amount);
  }
  public recordCurrency(page:number): Observable<any> {
    return this.http.get<any>("http://localhost:8080/v1/change/history?page="+page+"&size=10");
  }
}
