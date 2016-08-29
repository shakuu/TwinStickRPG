class Random {
    private _min: number;
    private _max: number;

    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }

    get min(): number {
        return this._min;
    }

    set min(min) {
        this._min = +min;
    }

    get max(): number {
        return this._max;
    }

    set max(max) {
        this._max = +max;
    }

    generate(): number {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
}

export {Random};
