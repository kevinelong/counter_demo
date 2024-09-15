class CounterData {
    constructor(min = 0, max = 99, value = 0, title="") {
        if (min > max || value < min || value > max) {
            console.error("Nonsense Parameters");
        }
        this.min = min;
        this.max = max;
        this.value = value;
        this.title = title;
    }
    getStatus() {
        return {
            min: this.min,
            max: this.max,
            value: this.value
        }
    }
    conform() {
        if (this.value > this.max) {
            this.value = this.max;
        } else if (this.value < this.min) {
            this.value = this.min;
        }
    }
    up(amount = 1) {
        this.value += amount;
        this.conform();
    }
    down(amount = 1) {
        this.value -= amount;
        this.conform();
    }
}
export { CounterData }
// const cd = new CounterData(0,9,0);
// console.log(JSON.stringify(cd.getStatus(), 0, 4));
// cd.up()
// cd.up()
// console.log(JSON.stringify(cd.getStatus(), 0, 4)); //expecting 2
// cd.down()
// cd.down()
// cd.down()
// cd.down()
// console.log(JSON.stringify(cd.getStatus(), 0, 4)); //expecting 0
