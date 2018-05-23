import {Component, OnInit} from '@angular/core';
import {Device} from "../devices/device";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedDevice: Device;

  constructor() {
  }

  ngOnInit() {
  }

  onSelectedDevice(device: Device) {
    this.selectedDevice = device;
  }

}
