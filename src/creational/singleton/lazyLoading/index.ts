export default class Lazy {
    private static instance: Lazy = null;
    private x: number
    private y: number

    private Lazy() {
        this.x = 19
        this.y = 56
    }

    public static getInstance(): Lazy { // should be async
        if(this.instance == null) {
            this.instance = new Lazy();
        }
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