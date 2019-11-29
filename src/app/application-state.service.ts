import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpRequest } from "@angular/common/http";
import { Observable, fromEvent, merge, of } from "rxjs";
import { mapTo } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApplicationStateService {
  public httpReq: HttpRequest<any>;
  constructor(private http: HttpClient) {}

  public httpGet(url: string): Observable<any> {
    return this.http.get(url);
  }

  public checkInternet(): boolean {
    let isOnLine: boolean = true;
    let checkOnLine: Observable<any> = merge(
      of(navigator.onLine),
      fromEvent(window, "online").pipe(mapTo(true)),
      fromEvent(window, "offline").pipe(mapTo(false))
    );

    checkOnLine.subscribe(isOnline => {
      isOnLine = isOnline;
    });

    return isOnLine;
  }
}
