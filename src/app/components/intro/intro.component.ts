import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  seen:boolean = true;
  constructor() { }

  ngOnInit() {
    if (!localStorage.getItem('intro')) {
      this.seen = false;
    }

  }
  ok(){
    this.seen = true;
    localStorage.setItem('intro','seen');
    
  }

}
