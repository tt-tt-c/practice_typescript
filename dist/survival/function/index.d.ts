export declare function generator(): Generator<number, void, unknown>;
export declare class JetLag {
    private message;
    constructor(message: string);
    replyFunction(ms: number): void;
}
export declare class Operator {
    private num;
    constructor(num: number);
    sum(num: number): this;
    getResult(): number;
}
