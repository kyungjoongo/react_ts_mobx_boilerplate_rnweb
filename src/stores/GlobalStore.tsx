import {action, observable} from "mobx";


class GlobalTestStore {

    @observable counter2 = 20;


    @action
    incrementTrippleCounter2() {
        this.counter2 = this.counter2 + 3;
    }

    @action
    decrementTrippleCounter2() {
        this.counter2 = this.counter2 - 3;
    }


    @action
    setCounter2(value: number) {
        this.counter2 = value
    }

    @action
    incrementFourCount() {
        this.counter2 = this.counter2 + 4;
    }

    @action
    incrementQuarterCount() {
        this.counter2 = this.counter2 + 4;
    }

    @action
    decrementCounter2() {
        this.counter2--;
    }


}

const globalStore = new GlobalTestStore();

export default globalStore
