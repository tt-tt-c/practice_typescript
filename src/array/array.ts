export default function arraySample() {
    const colors: string[] = ["red", "blue"]
    colors.push("yellow");
    console.log("Array array sample 1: ",colors);

    const even: Array<number> = [2,4,6]
    even.push(8);
    console.log("Array array sample 2: ",even);

    const odd: Array<number | string> = [1,3,'5']
    odd.push('7');
    console.log("Array array sample 3: ",odd);

    //配列の型推論
    const generateSomeArray = () => {
        const _someArray = [];
        _someArray.push(13)
        _someArray.push('string')
        return _someArray
    }

    const someArray = generateSomeArray();
    someArray.push(456);
    console.log("Array array sample 4: ",someArray);

    //タプル
    let response: [number, string] = [200, "OK"]
    // response = [400,"bad", "bad"];
    console.log("Array array sample 5: ",response);

    //レストパラメータ使用したタプル
    const girlfriends: [string,...string[]] = ["KIKU", "RISA"];
    console.log("Array array sample 6: ",girlfriends);

    //イミュータブルなタプル
    const commands: readonly string[] = ["git add", "git commit"]
    // commands.push()
    // commands[2] = "git push"
    


}