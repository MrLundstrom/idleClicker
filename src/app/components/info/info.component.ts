import { Component, OnInit } from '@angular/core';
import info from 'src/app/data/info'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  infos = info;

  constructor() { }

  ngOnInit() {
  }

}
