export default function typeAliasSample() {
  //型エイリアス
  type Country = {
    capital: string;
    language: string;
    name: string;
  };
  const japan: Country = {
    capital: "Tokyo",
    language: "Japanese",
    name: "Japan",
  };
  console.log("Object alias sample 1: ", japan);

  const america: Country = {
    capital: "Washington, D.C",
    language: "English",
    name: "America",
  };
  console.log("Object alias sample 2: ", america);

  //合併型と交差型
  type Knight = {
    hp: number;
    sp: number;
    weapon: string;
    swordSkill: string;
  };

  type Wizard = {
    hp: number;
    mp: number;
    weapon: string;
    magicSkill: string;
  };

  //合併型
  type Adventure = Knight | Wizard;

  //交差型
  type Paladin = Knight & Wizard;

  const adventure1: Adventure = {
    hp: 2,
    sp: 3,
    weapon: "木の剣",
    swordSkill: "三連切り",
  };
  const adventure2: Adventure = {
    hp: 12,
    sp:13,
    mp: 31,
    weapon: "木の杖",
    swordSkill: "gamoag",
  };

  console.log("Object alias sample 3: ", adventure1);
  console.log("Object alias sample 4: ", adventure2);

  const paladin: Paladin = {
      hp: 10,
      sp: 20,
      mp: 100,
      weapon: "銀の剣",
      swordSkill: "三連切り",
      magicSkill: "ファイアーボール"
  }

  console.log("Object alias sample 5: ", paladin);


}
