import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hwid: string;

  constructor(
    private router: Router,
    private electron: ElectronService
  ) {

  }

  ngOnInit(): void {
  }

  onGetHwid() {
    this.electron.ipcRenderer.send('getHwid');
    this.electron.ipcRenderer.on('sendHwid', (event, data) => {
      this.hwid = data;
    });
  }
}
