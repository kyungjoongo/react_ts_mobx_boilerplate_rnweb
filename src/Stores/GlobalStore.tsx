import {action, observable} from "mobx";


class GlobalTestStore {

    @observable counter2 = 0;


    @action
    setCounter2(value: number) {
        this.counter2 = value
    }

    @action
    incrementCounter2() {
        this.counter2 = this.counter2 + 2;
        console.log("counter2-===>", this.counter2);
    }


    @action
    decrementCounter2() {
        this.counter2--;
        console.log("counter2-===>", this.counter2);
    }

}

const globalStore = new GlobalTestStore();

export default globalStore
