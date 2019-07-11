import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'businessClicker';
  cookies: boolean = false;
  ngOnInit() {
    let cookieConsent = localStorage.getItem('cookies');
    if(cookieConsent){
      this.enableLocalStorage();
    }
  }
  enableLocalStorage(){
    this.cookies = true;
    localStorage.setItem('cookies', 'true')
  }
}
