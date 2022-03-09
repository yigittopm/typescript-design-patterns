class Eager {
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

    getX(): number {
        return this.x;
    }

    getY(): number{
        return this.y;
    }

    setX(x: number) {
        this.x = x;
    }

    setY(y: number) {
        this.y = y;
    }
}