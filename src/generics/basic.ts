export default function genericsBasicSample() {
    //ジェネリック型未使用
    const stringReduce = (array: string[], initialValue: string): string => {
        let result = initialValue;
        for(let i=0;i<array.length;i++) {
            result += array[i]
        }
        return result;
    }

    console.log("Generics basic sample1: ", stringReduce(["May ", "the ", "force ", "be ", "with ", "you."], ""));

    const numberReduce = (array: number[], initialValue: number): number => {
        let result = initialValue;
        for(let i=0;i<array.length;i++) {
            result += array[i]
        }
        return result;
    }

    console.log("Generics basic sample1: ", numberReduce([1,2,3,4,5], 10));

    type Reduce = {
        (array: number[], initialValue: number): number
        (array: string[], initialValue: string): string
    }

    type GenericReduce<T> = {
        (array: T[], initialValue: T): T
    }

    const numberReduce2: GenericReduce<number> = (array, initialValue) => {
        let result = initialValue;
        for(let i=0;i<array.length;i++) {
            result += array[i]
        }
        return result;
    }

    //様々なジェネリック型定義
    // 完全な呼び出しシグネチャ（個別）
    type GenericReduce2 = {
        <T>(array: T[], init: T):T
        <U>(array: U[], init: U): U
    }

    type GenericReduce3<T> = (array: T[], init: T) => T
    type GenericReduce4 = <T>(array: T[], init: T) => T

}