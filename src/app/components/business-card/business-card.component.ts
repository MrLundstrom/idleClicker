import { Component, OnInit, Input, Output, EventEmitter,OnDestroy } from '@angular/core';
import { Business } from 'src/app/interfaces/Business';
import { gameService } from 'src/app/services/game.service';
import icons from 'src/app/data/icons'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  amount: number = 1;
  business: Business;
  money: number;
  time: number = 0;
  on: boolean = false;
  reward: string = '0';
  icons = icons;
  test: Date;

  constructor(public GS: gameService) { }
  @Output() businessEvent = new EventEmitter<Business>();

  updateBusiness() {
    this.business.timeStamp = new Date();
    this.businessEvent.emit(this.business);
  }

  @Input()
  set Business(business: Business) {
    this.business = business;
    this.reward = this.rewardAmount(business).toPrecision(5);
  }
  @Input()
  set Amount(amount: number) {
    this.amount = amount;
  }

  ngOnInit() {
    this.subscription = (this.GS.atomicClock.subscribe(() => this.timer()));
    this.subscription.add(this.GS.moneySubscriber.subscribe(money => this.money = money));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  timer() {
    if (this.business.level > 0) {
      this.on = true;
      this.time++;
      if (this.time >= this.business.time) {
        this.addMoney(this.business.reward * Math.sqrt(this.business.level) * Math.pow(this.business.rewardMultiplier, this.business.level));
        this.time = 0;
      }
    }
  }
  addMoney(amount: number) {
    this.money += amount;
    this.GS.changeMoney(this.money);
  }
  removeMoney(amount: number) {
    this.money -= amount;
    this.GS.changeMoney(this.money);
  }
  upgradeBusiness(business: Business) {
    const cost = this.cost(business);
    if (cost <= this.money) {
      this.removeMoney(cost);
      for (let i = 0; i < this.amount; i++) {
        business.level++;
        if (business.level % 25 == 0) {
          business.reward *= 2;
        }
      }
      this.updateBusiness();
    }
  }
  rewardAmount(business: Business) {
    return this.GS.rewardAmount(business);
  }
  cost(business: Business) {
    let cost = 0;
    for (let k = 0; k < this.amount; k++) {
      cost += business.cost * Math.sqrt((business.level + k) + 1)/1.5 * Math.pow(business.costMultiplier, business.level + k);
    }
    if (this.amount > 1) {
      cost *= 0.75;
    }
    return cost;
  }
  afford(business): boolean {
    return this.cost(business) <= this.money;
  }
  width() {
    if (this.business.level % 25 == 0) {
      return '25';
    } else {
      return this.business.level % 25;
    }
  }
}
