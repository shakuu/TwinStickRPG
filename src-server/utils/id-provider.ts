class IdProvider {
    private _currentValue: number;

    constructor() {
        this._currentValue = 0;
    }

    public getNext(): number {
        return this._currentValue++;
    }

    public reset(): void {
        this._currentValue = 0;
    }
}

export {IdProvider};
