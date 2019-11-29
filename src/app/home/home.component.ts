import { Component, OnInit } from "@angular/core";
import { ApplicationStateService } from "../application-state.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"]
})
export class HomeComponent implements OnInit {
  public userColumns: string[] = ["name", "username", "email"];
  public userDetails: any = null;
  constructor(private appStateService: ApplicationStateService) {}

  ngOnInit() {}

  public getUsers() {
    const users = "https://jsonplaceholder.typicode.com/users";
    this.appStateService.httpGet(users).subscribe(apiResponse => {
      this.userDetails = apiResponse;
    });
  }
}
