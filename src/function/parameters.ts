export const isUserSignedIn = (userId: string, usesrname?: string): boolean => {
    if(userId === "ABC") {
        console.log("function parameters sample 1: user is signed in! Username is", usesrname)
        return true
    } else {
        console.log("function parameters sample 1: user is not signed in")
        return false
    }
}

export const isUserSignedIn2 = (userId: string, usesrname: string = 'No name'): boolean => {
    if(userId === "ABC") {
        console.log("function parameters sample 1: user is signed in! Username is", usesrname)
        return true
    } else {
        console.log("function parameters sample 1: user is not signed in")
        return false
    }
}

export const sumProductsPrice = (...productsPrice: number[]): number => {
    return productsPrice.reduce((price: number, productPrice: number) => {
        return price + productPrice;
    }, 0)
}
