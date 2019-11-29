import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, fromEvent, of } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { OfflineNotificationComponent } from "./offline-notification/offline-notification.component";
import { ApplicationStateService } from "./application-state.service";

@Injectable({
  providedIn: "root"
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private dialog: MatDialog,
    private appStateService: ApplicationStateService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.appStateService.httpReq = req;
    if (this.appStateService.checkInternet()) {
      return next.handle(this.appStateService.httpReq);
    } else {
      this.dialog.open(OfflineNotificationComponent, {
        width: "400px"
      });
      return of();
    }
  }
}
