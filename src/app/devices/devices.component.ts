import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Device} from './device';
import {DevicesService} from './devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  devices: Device[];
  @Output()selectedDevice = new EventEmitter<Device>();

  onSelect(device: Device): void {
    this.selectedDevice.emit(device);
  }

  constructor(private deviceService: DevicesService) {}

  ngOnInit() {
    this.getDevices();
  }

  getDevices() {
    this.deviceService.getDevices().subscribe(devices => this.devices = devices);
  }

}
