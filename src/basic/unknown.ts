export default function unknownSample() {
    const maybeNumber : unknown = 19;
    console.log(typeof maybeNumber, maybeNumber);

    if(typeof maybeNumber === 'number') {
        const sum = maybeNumber + 10;
        console.log("sum : ", sum);
    }
}