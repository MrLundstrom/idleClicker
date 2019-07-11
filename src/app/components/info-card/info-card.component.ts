import { Component, OnInit, Input } from '@angular/core';
import { Info } from 'src/app/interfaces/Info';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() info:Info;

  constructor() { }

  ngOnInit() {
  }

}
