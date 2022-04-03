export default class Eager {
    private static instance: Eager = new Eager();
    private x: number;
    private y: number;

    private Egaer() {
        this.x = 5;
        this.y = 10;
    }

    public static getInstance(): Eager {
        return this.instance;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number{
        return this.y;
    }

    public setX(x: number) {
        this.x = x;
    }

    public setY(y: number) {
        this.y = y;
    }
}