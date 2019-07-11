import { Component, OnInit, OnDestroy } from '@angular/core';
import { Business } from 'src/app/interfaces/Business';
import { gameService } from 'src/app/services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.scss'],
})
export class BusinessesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  businesses: Business[];
  amount = 1;
  constructor(public GS: gameService) { }

  ngOnInit() {
    this.subscription = (this.GS.businessSubscriber.subscribe(businesses => {
      this.businesses = businesses;
    }));
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  setAmount(amount: number) {
    this.amount = amount;
  }
  getBusiness($event: Business) {
    this.businesses.map((business, index) => {
      if (business.name == $event.name) {
        this.businesses[index] = $event;
      }
    })
    this.GS.changeBusinesses(this.businesses);
  }
  trackElement(index: number, business: Business) {
    return business ? business.timeStamp : null
  }

}
