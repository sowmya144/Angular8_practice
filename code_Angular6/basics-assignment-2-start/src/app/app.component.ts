import { Component } from "@angular/core";
import { ConsoleReporter } from "jasmine";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userName = "";
  showSecret = false;
  log = [];
  count = 0;
  totalcount = 0;
  clickFunction() {
    this.userName = "";
  }
  func1() {
    this.count++;
    this.totalcount = this.count;
    this.showSecret = !this.showSecret;

    this.log.push(this.log.length + 1);
  }
}
