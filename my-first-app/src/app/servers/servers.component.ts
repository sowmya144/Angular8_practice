import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers", //normal method
  //selector: "[app-servers]", // selector as an attribute, giving it square brackets
  //selector: ".app-servers", //selector as a class
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverNameEntered = "test1";
  serverStatus = "Server not created!";
  serverCreated = false;
  serversarray = ["test2", "test3", "test4"];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serversarray.push(this.serverNameEntered);
    this.serverStatus = "New server created! Name is " + this.serverNameEntered;
  }
  onUpdateServerName(event: Event) {
    this.serverNameEntered = (<HTMLInputElement>event.target).value; //since the value we type in the input field is stored in the valuep property when we use inspect and check
  }
  ngOnInit() {}
}
