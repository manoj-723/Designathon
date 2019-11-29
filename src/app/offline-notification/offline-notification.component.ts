import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { ApplicationStateService } from "../application-state.service";

@Component({
  selector: "app-offline-notification",
  templateUrl: "./offline-notification.component.html",
  styleUrls: ["./offline-notification.component.less"]
})
export class OfflineNotificationComponent {
  public imageUrl = "assets/images/Offline_image.png";

  constructor(
    public dialogRef: MatDialogRef<OfflineNotificationComponent>,
    private appStateService: ApplicationStateService
  ) {}

  close() {
    if (this.appStateService.checkInternet()) {
      location.reload();
    }
    this.dialogRef.close();
  }
}
