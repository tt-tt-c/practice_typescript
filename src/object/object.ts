export default function objectSample() {
  // const a = {
  //     name: 'taro',
  //     age: 23
  // }
  // a.name

  //オブジェクトリテラル記法
  let country: {
    language: string;
    name: string;
  } = {
    language: "Japanese",
    name: "taro",
  };

  console.log("Object object sample 1: ", country);

  country = {
    language: "English",
    name: "United States of America",
  };
  console.log("Object object sample 2: ", country);

  //オプショナルとReadonly
  const taro: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 23,
    lastName: "taro",
    firstName: "tsuruga",
  };
  taro.gender = "male";
  console.log("Object object sample 3: ", taro);

  //インデックスシグネチャ
  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: "Tokyo",
    Korea: "Seoul",
  };
  capitals.Chinae = "Beijing";
  console.log("Object object sample 4: ", capitals);


}
