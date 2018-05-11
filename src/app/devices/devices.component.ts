import {Component, OnInit} from '@angular/core';
import {DEVICES} from '../mock-device';
import {Device} from '../device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  devices = DEVICES;
  selectedDevice: Device;

  onSelect(device: Device): void {
    this.selectedDevice = device;
  }

  constructor() {
  }

  ngOnInit() {

  }

}
