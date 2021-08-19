export default function promiseSample() {
    const url = "https://api.github.com/users/tt-tt-c";

    type Profile = {
        login: string;
        id: number;
    };

    type FetchProfile = () => Promise<Profile | null>

    const fetchProfile:FetchProfile = () => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((res) => {
                    res.json()
                        .then((json) => {
                            console.log("Asynchronous Promise Sample1: ", json);
                            resolve(json);
                        })
                        .catch((e) => {
                            console.log(e);
                            reject(null);
                        });
                })
                .catch((e) => {
                    console.log(e);
                    reject(null);
                });
        });
    };

    fetchProfile().then((profile: Profile | null) => {
        if(profile) {
            console.log("Asynchronous Promise Sample2: ", profile);
        }
    })
}
