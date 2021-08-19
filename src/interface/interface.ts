interface Bread {
    calories: number;
}

interface Bread {
    type: string;
}

const francePan: Bread = {
    calories: 300,
    type: "hard",
};

//型エイリアスで定義
type MaboDofu = {
    calories: number;
    spicyLevel: number;
};

type Rice = {
    calories: number;
    gram: number;
};

type MaboDon = MaboDofu & Rice;

const maboDon: MaboDon = {
    calories: 300,
    spicyLevel: 5,
    gram: 500,
};

// インターフェースの継承
interface Book {
    page: number,
    title: string
}

interface Magazine extends Book {
    cycle: 'daily' | 'weekly'
}

const jump: Magazine = {
    page: 300,
    title: '週刊少年ジャンプ',
    cycle: 'weekly'
}

type BookType = {
    page: number
    title: string
}

interface HandBook extends BookType {
    theme: string
}

const cotrip: HandBook = {
    page: 120,
    title: 'ことりっぷ',
    theme: '旅行'
}

// implementsを使ってクラスに型定義
class Comic implements Book {
    page: number
    title: string

    constructor(page: number, title: string, private publishYear: string) {
        this.page = page
        this.title = title
    }

    getPublishYear() {
        return this.title + "が発売されたのは"  + this.publishYear + "年"
    }
}

export const popComic = new Comic (120, '毀滅', '1940');
