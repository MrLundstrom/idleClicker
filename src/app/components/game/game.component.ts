import { Component, OnInit, OnDestroy, ApplicationRef, NgZone } from '@angular/core';
import { Business } from 'src/app/interfaces/Business';
import { Upgrade } from 'src/app/interfaces/Upgrade';
import { gameService } from 'src/app/services/game.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  Subscription: Subscription;
  time: number = 0;
  public modalOpener: Subject<void> = new Subject();
  oposite = { 'chevron-up': 'chevron-down', 'chevron-down': 'chevron-up' }
  showInfo: string = 'chevron-down'
  businesses: Business[];
  upgrades: Upgrade[];
  MPS: number = 0;
  M: number = 0;
  money: number = 0;
  gradient: boolean = false;
  clicker;
  stableSubscription: Subscription;

  constructor(private GS: gameService, private aRef: ApplicationRef, private zone: NgZone) { }

  ngOnInit() {
    this.GS.initGame();
    this.Subscription = (this.GS.atomicClock.subscribe(() => this.autoSave()))
    this.Subscription.add(this.GS.businessSubscriber.subscribe(businesses => this.updateBusinesses(businesses)));
    this.Subscription.add(this.GS.moneySubscriber.subscribe(money => this.updateMoney(money)))
    this.Subscription.add(this.GS.upgradeSubscriber.subscribe(upgrades => this.upgrades = upgrades));
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
  updateMoney(money: number) {
    this.money = money;
    this.M = this.getMoney();
  }
  updateBusinesses(businesses: Business[]) {
    this.businesses = businesses
    this.MPS = this.getMoneyPerSec();
  }
  getMoneyPerSec() {
    return this.GS.getMPS(this.businesses);
  }
  getMoney() {
    return this.money;
  }
  toggleInfo() {
    this.showInfo = this.oposite[this.showInfo];
  }
  openModal() {
    this.modalOpener.next();
  }
  autoSave() {
    this.time++;
    if (this.time >= 40) {
      this.save();
      this.time = 0;
    }
  }
  save() {
    const timeStamp: number = new Date().getTime()
    localStorage.setItem('businesses', JSON.stringify(this.businesses));
    localStorage.setItem('upgrades', JSON.stringify(this.upgrades));
    localStorage.setItem('money', JSON.stringify(this.money));
    localStorage.setItem('time', JSON.stringify(timeStamp));
  }
  click() {
    this.money += (this.MPS / 10 + 0.5);
    this.GS.changeMoney(this.money);
    clearTimeout(this.clicker);
    this.gradient = true;
    //this.aRef.isStable.subscribe(isStable => { if (isStable) { this.clicker = setTimeout(() => this.gradient = false, 200) } }).unsubscribe()
    this.zone.runOutsideAngular(() => { this.clicker = setTimeout(() => this.updateDisplay(), 200) })
  }
  updateDisplay() {
    this.zone.run(() => this.gradient = false)
  }
}
