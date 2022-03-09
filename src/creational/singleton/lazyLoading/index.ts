class Lazy {
    private static instance: Lazy = null;

    private Lazy() {
        /**
         * Some codes
         */
    }

    public static getInstance(): Lazy { // should be async
        if(this.instance == null) {
            this.instance = new Lazy();
        }
        return this.instance;
    }
}