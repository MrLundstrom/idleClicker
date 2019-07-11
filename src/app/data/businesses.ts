import { Business } from '../interfaces/Business'
let home: Business = { name: 'Home', description: 'Home sweet home', level: 0, cost: 1.5, costMultiplier: 1.5, reward: 1.25, rewardMultiplier: 1.2, time: 8 }
let supermarket: Business = { name: 'Supermarket', description: 'All the food you ever wanted', level: 0, cost: 15, costMultiplier: 1.55, reward: 4, rewardMultiplier: 1.30, time: 4 }
let cinema: Business = { name: 'Cinema', description: 'Time to watch a new Murvel movie?', level: 0, cost: 120, costMultiplier: 1.45, reward: 20, rewardMultiplier: 1.25, time: 8 }
let hotel: Business = { name: 'Hotel', description: 'The best breakfast ever.', level: 0, cost: 1000, costMultiplier: 1.5, reward: 150, rewardMultiplier: 1.25, time: 16 }
let skiResort: Business = { name: 'Ski resort', description: 'And you thought golf was expensive?', level: 0, cost: 15000, costMultiplier: 1.5, reward: 200, rewardMultiplier: 1.25, time: 4 }
let airline: Business = { name: 'Airline', description: 'Sometimes on time.', level: 0, cost: 125000, costMultiplier: 1.5, reward: 5000, rewardMultiplier: 1.25, time: 8 }
let oilCompany: Business = { name: 'Oil company', description: 'The black gold', level: 0, cost: 1000000, costMultiplier: 1.5, reward: 50000, rewardMultiplier: 1.25, time: 16 }
let socialNetwork: Business = { name: 'Social network', description: 'Knows everything about everyone.', level: 0, cost: 16000000, costMultiplier: 1.5, reward: 200000, rewardMultiplier: 1.25, time: 4 }
let batteryFactory: Business = { name: 'Battery factory', description: 'Harder, Better, Faster, Stronger', level: 0, cost: 100000000, costMultiplier: 1.5, reward: 1000000, rewardMultiplier: 1.25, time: 4 }
let cryptoTrader: Business = { name: 'Crypto trader', description: 'Where did i put my wallet?', level: 0, cost: 1000000000, costMultiplier: 1.5, reward: 150000000, rewardMultiplier: 1.25, time: 64 }
const businesses = [home, supermarket, cinema, hotel, skiResort, airline, oilCompany, socialNetwork, batteryFactory, cryptoTrader];

export default businesses;