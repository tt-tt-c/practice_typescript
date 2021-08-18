export default function notExistSample() {
    let name = "tarotaro";
    console.log("notExist sample 1", typeof name, name);
    
    if(name) {
        console.log("notExist sample 2", "吾輩は猫である"+name);
    } else {
        console.log("not Exist sample 3: ", "吾輩は猫である名前はまだない");
    }

    let age = undefined;
    console.log("notExist sample 4", typeof age, age);
}