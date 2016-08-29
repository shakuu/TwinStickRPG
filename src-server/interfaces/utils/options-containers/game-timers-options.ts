interface IGameTimers {
    nextFrameDelay: number;
    lastFrameTimestamp: number;
    nextGameCycleDelay: number;
    lastGameCycleTimestamp: number;
    nextPhysicsCycleDelay: number;
    lastPhysicsCycleTimestamp: number;
}

export {IGameTimers};
