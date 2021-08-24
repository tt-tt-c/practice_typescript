declare type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
declare type Dan = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
declare type Player = "first" | "second";
declare class Position {
    private suji;
    private dan;
    constructor(suji: Suji, dan: Dan);
    distanceFrom(position: Position, player: Player): {
        suji: number;
        dan: number;
    };
}
declare abstract class Piece {
    private readonly player;
    protected position: Position;
    constructor(player: Player, suji: Suji, dan: Dan);
    moveTo(position: Position): void;
    abstract canMoveTo(position: Position, player: Player): boolean;
}
declare class Osho extends Piece {
    canMoveTo: (position: Position, player: Player) => boolean;
}
declare class Game {
    private pieces;
    private static makePieces;
}
