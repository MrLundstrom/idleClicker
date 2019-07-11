export interface Business{
    name: string,
    description?: string,
    level: number,
    cost: number,
    reward: number,
    costMultiplier: number,
    rewardMultiplier: number,
    time: number,
    timeStamp?: Date
}