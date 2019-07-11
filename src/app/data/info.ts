import { Info } from '../interfaces/Info';
let zero = "You play this game by upgrading each business to make more money, so you can upgrade them even more and make more money!";
let one = "Businesses give you more money the more you upgrade them, but they also become more expensive as you continue to develop them. PS. every 25 levels, your business reward is increased."
let two = "besides from upgrading the levels of your businesses, you can also purchase separate upgrades in the upgrades-menu. These upgrades can give several types of improvements to your businesses.";
let three = "By upgrading Speed, your businesses give you dollars more often."
let four = "By upgrading Reward, your businesses give you more dollars each time they finnish a 'round'."
let five = "By upgrading the rewardMultiplier, you gain alot more dollars from your business, as you can see in the formula under 'Businesses'."
let six = "The cost increases alot and therefore, a tactic is needed to choose the right businesses to upgrade at the moment to gain the highest interest."

let extra = `Businesses give you money the more you upgrade them, but they also become more expensive as you continue to develop them.
They increase in cost according to this formula: business.cost * Math.sqrt(business.level/2 + 1) * Math.pow(business.costMultiplier, business.level).
Their reward increases according to this formula: business.reward * Math.sqrt(business.level) * Math.pow(business.rewardMultiplier, business.level) which is quite similar.
However, the costMultiplier is usually higher then the rewardMultiplier.`

let Game: Info = { title: 'General', icon: 'question', text: zero }
let Businesses: Info = { title: 'Businesses', icon: 'store', text: one }
let Upgrade: Info = { title: 'Upgrade', icon: 'arrow-up', text: two }
let Speed: Info = { title: 'Speed', icon: 'tachometer-alt', text: three }
let Reward: Info = { title: 'Reward', icon: 'dollar-sign', text: four }
let Multiplier: Info = { title: 'rewardMultiplier', icon: 'superscript', text: five }
let Cost = { title: 'Cost', icon: 'money-bill-wave', text: six }

const info: Info[] = [Game, Businesses, Upgrade, Speed, Reward, Multiplier, Cost];
export default info;