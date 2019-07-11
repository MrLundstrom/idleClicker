import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Business } from 'src/app/interfaces/Business';
import { Upgrade } from 'src/app/interfaces/Upgrade'
import icons from 'src/app/data/icons'
import { gameService } from 'src/app/services/game.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-business-upgrades',
  templateUrl: './business-upgrades.component.html',
  styleUrls: ['./business-upgrades.component.scss']
})
export class BusinessUpgradesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @Input() modalOpener: Subject<void>;
  upgrades: Upgrade[];
  businesses: Business[];
  money: number;
  icons = icons;
  show: boolean = false;
  upgradesAmount: number = 0;
  constructor(private GS: gameService) { }

  ngOnInit() {
    this.subscription = this.modalOpener.subscribe(() => this.toggleModal());
    this.subscription.add(this.GS.upgradeSubscriber.subscribe(upgrades => this.updateUpgrade(upgrades)));
    this.subscription.add(this.GS.businessSubscriber.subscribe(businesses => this.businesses = businesses));
    this.subscription.add(this.GS.moneySubscriber.subscribe(money => this.money = money));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  updateUpgrade(upgrades: Upgrade[]) {
    this.upgrades = upgrades;
    this.upgrades.sort(this.customSort);
    this.upgradesAmount = this.numberOfUpgrades();
  }
  numberOfUpgrades(){
    let number = 0;
    this.upgrades.map(upgrade => {if (upgrade.status != 'done'){
      number++;
    }})
    return number;
  }
  toggleModal() {
    this.show = !this.show;
  }
  afford(idx) {
    return this.upgrades[idx].cost <= this.money;
  }
  upgradeBusiness(upgrade: Upgrade) {
    if (upgrade.cost <= this.money && !upgrade.status) {
      this.businesses.map(business => {
        if (business.name == upgrade.targetBusiness) {
          this.money -= upgrade.cost;
          business[upgrade.targetValue] = business[upgrade.targetValue] * upgrade.multiplier;
          business.timeStamp = new Date();
          upgrade.status = "done";
        }
      })
    }
    this.GS.changeBusinesses(this.businesses);
    this.GS.changeMoney(this.money);
  }
  customSort(a: Upgrade, b: Upgrade) {
    if (a.cost < b.cost) {
      return -1;
    } else if (b.cost < a.cost) {
      return 1;
    } else return 0;
  }
  trackElement(index: number, upgrade: Upgrade) {
    return upgrade ? upgrade.status : null
  }
}
