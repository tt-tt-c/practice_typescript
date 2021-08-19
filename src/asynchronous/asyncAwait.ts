export default async function asyncAwaitSample() {
    const url = "https://api.github.com/users/tt-tt-c";

    type Profile = {
        login: string;
        id: number;
    };

    type FetchProfile = () => Promise<Profile | null>;

    const fetchProfile: FetchProfile = async () => {
        const response = await fetch(url)
            .then((res) => res)
            .catch((e) => {
                console.log(e);
                return null;
            });

        if (!response) {
            return null;
        }

        const json = await response
            .json()
            .then((json: Profile) => {
                console.log("Asynchronous async/await Sample1: ", json);
                return json;
            })
            .catch((e) => {
                console.log(e);
                return null;
            });
        return json
    };

    const profile = await fetchProfile()
    console.log("Asynchronous async/await Sample2: ", profile);

}
