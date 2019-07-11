import { Upgrade } from "../interfaces/Upgrade";
//EACH LEVEL COSTS 35X LAST ONE --> AUTOMATE?
//base cost
let home: number = 25;
let supermarket: number = 600;
let cinema: number = 12500;
let hotel: number = 65000;
let skiResort: number = 200000;
let airline: number = 650000;
let oilCompany: number = 1000000;
let socialNetwork: number = 20000000;
let batteryFactory: number = 42000000;
let CryptoTrader: number = 100000000;

//HOME
let h1: Upgrade = { name: 'Upgrade 1', icon: 'tachometer-alt', targetBusiness: 'Home', cost: home * Math.pow(35, 0), targetValue: 'time', multiplier: 0.5, status: '' };
let h2: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Home', cost: home * Math.pow(35, 1), targetValue: 'reward', multiplier: 2, status: '' };
let h3: Upgrade = { name: 'Upgrade 3', icon: 'tachometer-alt', targetBusiness: 'Home', cost: home * Math.pow(35, 2), targetValue: 'time', multiplier: 0.5, status: '' };
let h4: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Home', cost: home * Math.pow(35, 3), targetValue: 'reward', multiplier: 2, status: '' };
let h5: Upgrade = { name: 'Upgrade 5', icon: 'dollar-sign', targetBusiness: 'Home', cost: home * Math.pow(35, 4), targetValue: 'reward', multiplier: 2, status: '' };
let h6: Upgrade = { name: 'Upgrade 6', icon: 'superscript', targetBusiness: 'Home', cost: home * Math.pow(35, 5), targetValue: 'rewardMultiplier', multiplier: 1.05, status: '' };
let h7: Upgrade = { name: 'Upgrade 7', icon: 'dollar-sign', targetBusiness: 'Home', cost: home * Math.pow(35, 6), targetValue: 'reward', multiplier: 2, status: '' };
let h8: Upgrade = { name: 'Upgrade 8', icon: 'dollar-sign', targetBusiness: 'Home', cost: home * Math.pow(35, 7), targetValue: 'reward', multiplier: 2, status: '' };
let h9: Upgrade = { name: 'Upgrade 9', icon: 'dollar-sign', targetBusiness: 'Home', cost: home * Math.pow(35, 8), targetValue: 'reward', multiplier: 2, status: '' };
let h10: Upgrade = { name: 'Upgrade 10', icon: 'superscript', targetBusiness: 'Home', cost: home * Math.pow(35, 9), targetValue: 'rewardMultiplier', multiplier: 1.05, status: '' };
//SUPERMARKET
let s1: Upgrade = { name: 'Upgrade 1', icon: 'dollar-sign', targetBusiness: 'Supermarket', cost: supermarket * Math.pow(35, 0), targetValue: 'reward', multiplier: 2, status: '' };
let s2: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Supermarket', cost: supermarket * Math.pow(35, 1), targetValue: 'reward', multiplier: 2, status: '' };
let s3: Upgrade = { name: 'Upgrade 3', icon: 'tachometer-alt', targetBusiness: 'Supermarket', cost: supermarket * Math.pow(35, 2), targetValue: 'time', multiplier: 0.5, status: '' };
let s4: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Supermarket', cost: supermarket * Math.pow(35, 3), targetValue: 'reward', multiplier: 2, status: '' };
let s5: Upgrade = { name: 'Upgrade 5', icon: 'superscript', targetBusiness: 'Supermarket', cost: supermarket * Math.pow(35, 4), targetValue: 'rewardMultiplier', multiplier: 1.05, status: '' };
let s6: Upgrade = { name: 'Upgrade 6', icon: 'dollar-sign', targetBusiness: 'Supermarket', cost: supermarket * Math.pow(35, 5), targetValue: 'reward', multiplier: 2, status: '' };
let s7: Upgrade = { name: 'Upgrade 7', icon: 'dollar-sign', targetBusiness: 'Supermarket', cost: supermarket * Math.pow(35, 6), targetValue: 'reward', multiplier: 2, status: '' };
let s8: Upgrade = { name: 'Upgrade 8', icon: 'dollar-sign', targetBusiness: 'Supermarket', cost: supermarket * Math.pow(35, 7), targetValue: 'reward', multiplier: 2, status: '' };
let s9: Upgrade = { name: 'Upgrade 9', icon: 'dollar-sign', targetBusiness: 'Supermarket', cost: supermarket * Math.pow(35, 8), targetValue: 'reward', multiplier: 2, status: '' };
let s10: Upgrade = { name: 'Upgrade 10', icon: 'dollar-sign', targetBusiness: 'Supermarket', cost: supermarket * Math.pow(35, 9), targetValue: 'reward', multiplier: 2, status: '' };
//CINEMA
let c1: Upgrade = { name: 'Upgrade 1', icon: 'tachometer-alt', targetBusiness: 'Cinema', cost: cinema * Math.pow(35, 0), targetValue: 'time', multiplier: 0.5, status: '' };
let c2: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Cinema', cost: cinema * Math.pow(35, 1), targetValue: 'reward', multiplier: 2, status: '' };
let c3: Upgrade = { name: 'Upgrade 3', icon: 'tachometer-alt', targetBusiness: 'Cinema', cost: cinema * Math.pow(35, 2), targetValue: 'time', multiplier: 0.5, status: '' };
let c4: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Cinema', cost: cinema * Math.pow(35, 3), targetValue: 'reward', multiplier: 2, status: '' };
let c5: Upgrade = { name: 'Upgrade 5', icon: 'dollar-sign', targetBusiness: 'Cinema', cost: cinema * Math.pow(35, 4), targetValue: 'reward', multiplier: 2, status: '' };
let c6: Upgrade = { name: 'Upgrade 6', icon: 'dollar-sign', targetBusiness: 'Cinema', cost: cinema * Math.pow(35, 5), targetValue: 'reward', multiplier: 2, status: '' };
let c7: Upgrade = { name: 'Upgrade 7', icon: 'dollar-sign', targetBusiness: 'Cinema', cost: cinema * Math.pow(35, 6), targetValue: 'reward', multiplier: 2, status: '' };
let c8: Upgrade = { name: 'Upgrade 8', icon: 'superscript', targetBusiness: 'Cinema', cost: cinema * Math.pow(35, 7), targetValue: 'rewardMultiplier', multiplier: 1.05, status: '' };
let c9: Upgrade = { name: 'Upgrade 9', icon: 'dollar-sign', targetBusiness: 'Cinema', cost: cinema * Math.pow(35, 8), targetValue: 'reward', multiplier: 2, status: '' };
let c10: Upgrade = { name: 'Upgrade 10', icon: 'dollar-sign', targetBusiness: 'Cinema', cost: cinema * Math.pow(35, 9), targetValue: 'reward', multiplier: 2, status: '' };
//HOTEL
let ho1: Upgrade = { name: 'Upgrade 1', icon: 'tachometer-alt', targetBusiness: 'Hotel', cost: hotel * Math.pow(35, 0), targetValue: 'time', multiplier: 0.5, status: '' };
let ho2: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Hotel', cost: hotel * Math.pow(35, 1), targetValue: 'reward', multiplier: 2, status: '' };
let ho3: Upgrade = { name: 'Upgrade 3', icon: 'tachometer-alt', targetBusiness: 'Hotel', cost: hotel * Math.pow(35, 2), targetValue: 'time', multiplier: 0.5, status: '' };
let ho4: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Hotel', cost: hotel * Math.pow(35, 3), targetValue: 'reward', multiplier: 2, status: '' };
let ho5: Upgrade = { name: 'Upgrade 5', icon: 'superscript', targetBusiness: 'Hotel', cost: hotel * Math.pow(35, 4), targetValue: 'rewardMultiplier', multiplier: 1.05, status: '' };
let ho6: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Hotel', cost: hotel * Math.pow(35, 5), targetValue: 'reward', multiplier: 2, status: '' };
let ho7: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Hotel', cost: hotel * Math.pow(35, 6), targetValue: 'reward', multiplier: 2, status: '' };
let ho8: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Hotel', cost: hotel * Math.pow(35, 7), targetValue: 'reward', multiplier: 2, status: '' };
let ho9: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Hotel', cost: hotel * Math.pow(35, 8), targetValue: 'reward', multiplier: 2, status: '' };
let ho10: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Hotel', cost: hotel * Math.pow(35, 9), targetValue: 'reward', multiplier: 2, status: '' };
//SKI RESORT
let sk1: Upgrade = { name: 'Upgrade 1', icon: 'tachometer-alt', targetBusiness: 'Ski resort', cost: skiResort * Math.pow(35, 0), targetValue: 'time', multiplier: 0.5, status: '' };
let sk2: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Ski resort', cost: skiResort * Math.pow(35, 1), targetValue: 'reward', multiplier: 2, status: '' };
let sk3: Upgrade = { name: 'Upgrade 3', icon: 'dollar-sign', targetBusiness: 'Ski resort', cost: skiResort * Math.pow(35, 2), targetValue: 'time', multiplier: 2, status: '' };
let sk4: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Ski resort', cost: skiResort * Math.pow(35, 3), targetValue: 'reward', multiplier: 2, status: '' };
let sk5: Upgrade = { name: 'Upgrade 5', icon: 'dollar-sign', targetBusiness: 'Ski resort', cost: skiResort * Math.pow(35, 4), targetValue: 'reward', multiplier: 2, status: '' };
let sk6: Upgrade = { name: 'Upgrade 6', icon: 'superscript', targetBusiness: 'Ski resort', cost: skiResort * Math.pow(35, 5), targetValue: 'rewardMultiplier', multiplier: 1.05, status: '' };
let sk7: Upgrade = { name: 'Upgrade 7', icon: 'dollar-sign', targetBusiness: 'Ski resort', cost: skiResort * Math.pow(35, 6), targetValue: 'reward', multiplier: 2, status: '' };
let sk8: Upgrade = { name: 'Upgrade 8', icon: 'dollar-sign', targetBusiness: 'Ski resort', cost: skiResort * Math.pow(35, 7), targetValue: 'reward', multiplier: 2, status: '' };
let sk9: Upgrade = { name: 'Upgrade 9', icon: 'dollar-sign', targetBusiness: 'Ski resort', cost: skiResort * Math.pow(35, 8), targetValue: 'reward', multiplier: 2, status: '' };
let sk10: Upgrade = { name: 'Upgrade 10', icon: 'dollar-sign', targetBusiness: 'Ski resort', cost: skiResort * Math.pow(35, 9), targetValue: 'reward', multiplier: 2, status: '' };
//AIRLINE
let a1: Upgrade = { name: 'Upgrade 1', icon: 'tachometer-alt', targetBusiness: 'Airline', cost: airline * Math.pow(35, 0), targetValue: 'time', multiplier: 0.5, status: '' };
let a2: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Airline', cost: airline * Math.pow(35, 1), targetValue: 'reward', multiplier: 2, status: '' };
let a3: Upgrade = { name: 'Upgrade 3', icon: 'tachometer-alt', targetBusiness: 'Airline', cost: airline * Math.pow(35, 2), targetValue: 'time', multiplier: 0.5, status: '' };
let a4: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Airline', cost: airline * Math.pow(35, 3), targetValue: 'reward', multiplier: 2, status: '' };
let a5: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Airline', cost: airline * Math.pow(35, 4), targetValue: 'reward', multiplier: 2, status: '' };
let a6: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Airline', cost: airline * Math.pow(35, 5), targetValue: 'reward', multiplier: 2, status: '' };
let a7: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Airline', cost: airline * Math.pow(35, 6), targetValue: 'reward', multiplier: 2, status: '' };
let a8: Upgrade = { name: 'Upgrade 6', icon: 'superscript', targetBusiness: 'Airline', cost: airline * Math.pow(35, 7), targetValue: 'rewardMultiplier', multiplier: 1.05, status: '' };
let a9: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Airline', cost: airline * Math.pow(35, 8), targetValue: 'reward', multiplier: 2, status: '' };
let a10: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Airline', cost: airline * Math.pow(35, 9), targetValue: 'reward', multiplier: 2, status: '' };
//OIL COMPANY
let o1: Upgrade = { name: 'Upgrade 1', icon: 'tachometer-alt', targetBusiness: 'Oil company', cost: oilCompany * Math.pow(35, 0), targetValue: 'time', multiplier: 0.5, status: '' };
let o2: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Oil company', cost: oilCompany * Math.pow(35, 1), targetValue: 'reward', multiplier: 2, status: '' };
let o3: Upgrade = { name: 'Upgrade 3', icon: 'tachometer-alt', targetBusiness: 'Oil company', cost: oilCompany * Math.pow(35, 2), targetValue: 'time', multiplier: 0.5, status: '' };
let o4: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Oil company', cost: oilCompany * Math.pow(35, 3), targetValue: 'reward', multiplier: 2, status: '' };
let o5: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Oil company', cost: oilCompany * Math.pow(35, 4), targetValue: 'reward', multiplier: 2, status: '' };
let o6: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Oil company', cost: oilCompany * Math.pow(35, 5), targetValue: 'reward', multiplier: 2, status: '' };
let o7: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Oil company', cost: oilCompany * Math.pow(35, 6), targetValue: 'reward', multiplier: 2, status: '' };
let o8: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Oil company', cost: oilCompany * Math.pow(35, 7), targetValue: 'reward', multiplier: 2, status: '' };
let o9: Upgrade = { name: 'Upgrade 3', icon: 'tachometer-alt', targetBusiness: 'Oil company', cost: oilCompany * Math.pow(35, 8), targetValue: 'time', multiplier: 0.5, status: '' };
let o10: Upgrade = { name: 'Upgrade 6', icon: 'superscript', targetBusiness: 'Oil company', cost: oilCompany * Math.pow(35, 9), targetValue: 'rewardMultiplier', multiplier: 1.05, status: '' };

//SOCIAL NETWORK
let sn1: Upgrade = { name: 'Upgrade 1', icon: 'tachometer-alt', targetBusiness: 'Social network', cost: socialNetwork * Math.pow(35, 0), targetValue: 'time', multiplier: 0.5, status: '' };
let sn2: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Social network', cost: socialNetwork * Math.pow(35, 1), targetValue: 'reward', multiplier: 2, status: '' };
let sn3: Upgrade = { name: 'Upgrade 3', icon: 'tachometer-alt', targetBusiness: 'Social network', cost: socialNetwork * Math.pow(35, 2), targetValue: 'time', multiplier: 0.5, status: '' };
let sn4: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Social network', cost: socialNetwork * Math.pow(35, 3), targetValue: 'reward', multiplier: 2, status: '' };
let sn5: Upgrade = { name: 'Upgrade 5', icon: 'dollar-sign', targetBusiness: 'Social network', cost: socialNetwork * Math.pow(35, 4), targetValue: 'reward', multiplier: 2, status: '' };
let sn6: Upgrade = { name: 'Upgrade 6', icon: 'superscript', targetBusiness: 'Social network', cost: oilCompany * Math.pow(35, 5), targetValue: 'rewardMultiplier', multiplier: 1.05, status: '' };
let sn7: Upgrade = { name: 'Upgrade 7', icon: 'dollar-sign', targetBusiness: 'Social network', cost: socialNetwork * Math.pow(35, 6), targetValue: 'reward', multiplier: 2, status: '' };
let sn8: Upgrade = { name: 'Upgrade 8', icon: 'dollar-sign', targetBusiness: 'Social network', cost: socialNetwork * Math.pow(35, 7), targetValue: 'reward', multiplier: 2, status: '' };
let sn9: Upgrade = { name: 'Upgrade 9', icon: 'dollar-sign', targetBusiness: 'Social network', cost: socialNetwork * Math.pow(35, 8), targetValue: 'reward', multiplier: 2, status: '' };
let sn10: Upgrade = { name: 'Upgrade 10', icon: 'dollar-sign', targetBusiness: 'Social network', cost: socialNetwork * Math.pow(35, 9), targetValue: 'reward', multiplier: 2, status: '' };


//BATTERY FACTORY
let b1: Upgrade = { name: 'Upgrade 1', icon: 'tachometer-alt', targetBusiness: 'Battery factory', cost: batteryFactory * Math.pow(35, 0), targetValue: 'time', multiplier: 0.5, status: '' };
let b2: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Battery factory', cost: batteryFactory * Math.pow(35, 1), targetValue: 'reward', multiplier: 2, status: '' };
let b3: Upgrade = { name: 'Upgrade 3', icon: 'dollar-sign', targetBusiness: 'Battery factory', cost: batteryFactory * Math.pow(35, 2), targetValue: 'reward', multiplier: 2, status: '' };
let b4: Upgrade = { name: 'Upgrade 4', icon: 'dollar-sign', targetBusiness: 'Battery factory', cost: batteryFactory * Math.pow(35, 3), targetValue: 'reward', multiplier: 2, status: '' };
let b5: Upgrade = { name: 'Upgrade 5', icon: 'dollar-sign', targetBusiness: 'Battery factory', cost: batteryFactory * Math.pow(35, 4), targetValue: 'reward', multiplier: 2, status: '' };
let b6: Upgrade = { name: 'Upgrade 6', icon: 'dollar-sign', targetBusiness: 'Battery factory', cost: batteryFactory * Math.pow(35, 5), targetValue: 'reward', multiplier: 2, status: '' };
let b7: Upgrade = { name: 'Upgrade 7', icon: 'dollar-sign', targetBusiness: 'Battery factory', cost: batteryFactory * Math.pow(35, 6), targetValue: 'reward', multiplier: 2, status: '' };
let b8: Upgrade = { name: 'Upgrade 8', icon: 'dollar-sign', targetBusiness: 'Battery factory', cost: batteryFactory * Math.pow(35, 7), targetValue: 'reward', multiplier: 2, status: '' };
let b9: Upgrade = { name: 'Upgrade 9', icon: 'dollar-sign', targetBusiness: 'Battery factory', cost: batteryFactory * Math.pow(35, 8), targetValue: 'reward', multiplier: 2, status: '' };
let b10: Upgrade = { name: 'Upgrade 10', icon: 'superscript', targetBusiness: 'Battery factory', cost: batteryFactory * Math.pow(35, 9), targetValue: 'rewardMultiplier', multiplier: 1.05, status: '' };


//CRYPTOCURRENCY OWNER
let cr1: Upgrade = { name: 'Upgrade 1', icon: 'tachometer-alt', targetBusiness: 'Crypto trader', cost: CryptoTrader * Math.pow(35, 0), targetValue: 'time', multiplier: 0.5, status: '' };
let cr2: Upgrade = { name: 'Upgrade 2', icon: 'dollar-sign', targetBusiness: 'Crypto trader', cost: CryptoTrader * Math.pow(35, 1), targetValue: 'reward', multiplier: 2, status: '' };
let cr3: Upgrade = { name: 'Upgrade 3', icon: 'tachometer-alt', targetBusiness: 'Crypto trader', cost: CryptoTrader * Math.pow(35, 2), targetValue: 'time', multiplier: 0.5, status: '' };
let cr4: Upgrade = { name: 'Upgrade 4', icon: 'superscript', targetBusiness: 'Crypto trader', cost: CryptoTrader * Math.pow(35, 3), targetValue: 'rewardMultiplier', multiplier: 1.05, status: '' };
let cr5: Upgrade = { name: 'Upgrade 5', icon: 'dollar-sign', targetBusiness: 'Crypto trader', cost: CryptoTrader * Math.pow(35, 4), targetValue: 'reward', multiplier: 2, status: '' };
let cr6: Upgrade = { name: 'Upgrade 6', icon: 'dollar-sign', targetBusiness: 'Crypto trader', cost: CryptoTrader * Math.pow(35, 5), targetValue: 'reward', multiplier: 2, status: '' };
let cr7: Upgrade = { name: 'Upgrade 7', icon: 'dollar-sign', targetBusiness: 'Crypto trader', cost: CryptoTrader * Math.pow(35, 6), targetValue: 'reward', multiplier: 2, status: '' };
let cr8: Upgrade = { name: 'Upgrade 8', icon: 'dollar-sign', targetBusiness: 'Crypto trader', cost: CryptoTrader * Math.pow(35, 7), targetValue: 'reward', multiplier: 2, status: '' };
let cr9: Upgrade = { name: 'Upgrade 9', icon: 'dollar-sign', targetBusiness: 'Crypto trader', cost: CryptoTrader * Math.pow(35, 8), targetValue: 'reward', multiplier: 2, status: '' };
let cr10: Upgrade = { name: 'Upgrade 10', icon: 'dollar-sign', targetBusiness: 'Crypto trader', cost: CryptoTrader * Math.pow(35, 9), targetValue: 'reward', multiplier: 2, status: '' }; 

var upgrades: Upgrade[] = [
    h1, h2, h3, h4, h5, h6, h7, h8, h9, h10,
    s1, s2, s3, s4, s5, s6, s7, s8, s9, s10,
    c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
    ho1, ho2, ho3, ho4, ho5, ho6, ho7, ho8, ho9, ho10,
    sk1, sk2, sk3, sk4, sk5, sk6, sk7, sk8, sk9, sk10,
    a1, a2, a3, a4, a5, a6, a7, a8, a9, a10,
    o1, o2, o3, o4, o5, o6, o7, o8, o9, o10,
    sn1, sn2, sn3, sn4, sn5, sn6, sn7, sn8, sn9, sn9, sn10, 
    b1, b2, b3, b4, b5, b6, b7, b8, b9, b10,
    cr1, cr2, cr3, cr4, cr5, cr6, cr7, cr8, cr9, cr10 ];
          
export default upgrades;