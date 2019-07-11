import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { IntroComponent } from './components/intro/intro.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GameComponent } from './components/game/game.component';
import { BusinessesComponent } from './components/businesses/businesses.component';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { BusinessUpgradesComponent } from './components/business-upgrades/business-upgrades.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faStore, faHotel, faArrowUp, faDollarSign, faFilm, faPiggyBank, faStopwatch, faSkiing, faPlaneDeparture, faOilCan, faUsers, faBatteryFull, faCoins, faChevronUp, faChevronDown, faTachometerAlt, faSuperscript, faQuestion, faMoneyBillWave, faCog, faInfo, faGamepad, } from '@fortawesome/free-solid-svg-icons';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    InfoCardComponent,
    IntroComponent,
    SettingsComponent,
    GameComponent,
    BusinessesComponent,
    BusinessCardComponent,
    BusinessUpgradesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faHome,faStore,faHotel,faArrowUp, faDollarSign,faFilm,
      faPiggyBank,faStopwatch, faSkiing,faPlaneDeparture,faOilCan,
      faUsers,faBatteryFull,faCoins,faChevronUp,faChevronDown,faTachometerAlt,
      faSuperscript,faQuestion,faMoneyBillWave,faCog,faInfo,faGamepad);
  }
}