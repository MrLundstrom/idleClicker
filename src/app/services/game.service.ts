import { Injectable, ApplicationRef, NgZone } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Business } from '../interfaces/Business';
import { Upgrade } from '../interfaces/Upgrade';
import businesses from 'src/app/data/businesses';
import upgrades from 'src/app/data/upgrades';

@Injectable({
  providedIn: 'root'
})
export class gameService {
  atomicClock: Subject<void> = new Subject();
  private Businesses = new BehaviorSubject<Business[]>(businesses);
  private Upgrades = new BehaviorSubject<Upgrade[]>(upgrades);
  private Money = new BehaviorSubject<number>(1);
  public businessSubscriber = this.Businesses.asObservable();
  public upgradeSubscriber = this.Upgrades.asObservable();
  public moneySubscriber = this.Money.asObservable();
  private clock;
  stableSubscription: Subscription;

  constructor(private aRef: ApplicationRef, private zone: NgZone) { }

  initGame() {
    this.loadGame();
    this.startClock()
  }
  //INIT
  changeBusinesses(businesses: Business[]) {
    this.Businesses.next(businesses);
  }
  changeMoney(money: number) {
    this.Money.next(money);
  }
  changeUpgrades(upgrades: Upgrade[]) {
    this.Upgrades.next(upgrades);
  }
  loadGame() {
    const time = localStorage.getItem('time');
    const tempM = localStorage.getItem('money');
    const tempB = localStorage.getItem('businesses');
    const tempU = localStorage.getItem('upgrades');
    if (tempM && tempB && tempU) {
      let bTemp: Business[] = JSON.parse(tempB);
      let mTemp: number = JSON.parse(tempM);
      let uTemp: Upgrade[] = JSON.parse(tempU);
      if (time) {
        let tempT: number = JSON.parse(time);
        const TempT2 = new Date().getTime();
        const diff = (TempT2 - tempT) / 1000;
        if (diff > 60) {
          alert('You were away for ' + diff + ' seconds and made $' + (this.totalReward(bTemp) * diff).toPrecision(5) + '.')
          mTemp = this.totalReward(bTemp) * diff + mTemp;
        }
      }
      this.changeMoney(mTemp);
      this.changeBusinesses(bTemp);
      this.changeUpgrades(uTemp);
    } else {
      this.newGame();

    }
  }
  newGame() {
    localStorage.setItem('money', JSON.stringify(1));
    localStorage.setItem('businesses', JSON.stringify(businesses));
    localStorage.setItem('upgrades', JSON.stringify(upgrades));
    localStorage.setItem('time', JSON.stringify(new Date().getTime()));
    this.loadGame();
  }
  resetGame() {
    this.stopClock()
    localStorage.removeItem('money');
    localStorage.removeItem('upgrades');
    localStorage.removeItem('businesses');
    localStorage.removeItem('intro');
    this.newGame();
    this.startClock();
  }

  //TIME
  startClock() {
    clearInterval(this.clock);
    this.zone.runOutsideAngular(() => this.clock = setInterval(() => this.increaseClock(), 250))
    // this.aRef.isStable.subscribe(isStable => {
    //   if (isStable) {
    //   this.clock = setInterval(() => {
    //     this.atomicClock.next();
    //   }, 250)
    //   }
    // })
  }
  stopClock() {
    clearInterval(this.clock);
  }

  increaseClock(){
    this.zone.run(() => this.atomicClock.next());
  }
  totalReward(businesses: Business[]) {
    let reward = 0;
    businesses.map(business => reward += this.rewardAmount(business));
    return reward;
  }
  rewardAmount(business: Business): number {
    return business.reward * Math.sqrt(business.level) * Math.pow(business.rewardMultiplier, business.level) / business.time * 4;
  }
  getMPS(businesses: Business[]): number {
    let money = 0;
    businesses.map(business => money += this.rewardAmount(business));
    return money;
  }
}
