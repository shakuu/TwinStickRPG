let _currentValue: number;

class IdProvider {
    constructor() {
        _currentValue = 0;
    }

    public getNext(): number {
        return _currentValue++;
    }

    public reset(): void {
        _currentValue = 0;
    }
}

export {IdProvider};
