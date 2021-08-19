export default function callBackSample() {
    const url = "https://api.github.com/users/tt-tt-c";

    // コールバックで呼び出す非同期処理
    const fetchProfile = () => {
        return fetch(url)
            .then((res) => {
                res.json()
                    .then((json) => {
                        console.log("Asynchronous Callback sample1: ", json);
                        return json;
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const profile = fetchProfile();
    console.log("Asynchronous Callback sample2: ", profile);
}
