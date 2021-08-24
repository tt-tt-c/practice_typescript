export function* generator() {
    let i = 0;
    while (true) {
        yield (i = i + 10);
    }
}

export class JetLag {
    private message: string;

    public constructor(message: string) {
        this.message = message;
    }

    public replyFunction(ms: number): void {
        setTimeout(() => {
            console.log(this.message);
        }, ms);
    }
}

//メソッドチェーン
export class Operator {
    private num: number;

    constructor(num: number) {this.num = num}

    sum(num: number) {
        this.num += num;
        return this
    }

    getResult() {
        return this.num;
    }
}

//ジェネリクス
function chooseRandomly<T>(v1: T, v2: T): T {
    return Math.random() <= 0.5 ? v1 : v2
}

chooseRandomly<string>("勝ち","負け");

//
type Person = {
    name?: string
    readonly gender: string
}

type Mammal = {
    name: string
    gender: string
    age: number
}
type Proper = 'name' | 'age'

type Person2 = Pick<Mammal, Proper>

type RequiredPerson = Required<Person>

const taro: RequiredPerson = {
    name: "taro",
    gender: "man"
}
const jiro: Readonly<Person> = {
    gender: 'men'
}