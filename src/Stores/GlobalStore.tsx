import {action, observable} from "mobx";


class GlobalStore {

    @observable count = 0;

    @observable counter2 = 15;

    @action
    setCounter2(value: number) {
        this.counter2 = value
    }

    @action
    incrementCounter2() {
        this.counter2 = this.counter2 + 1;
    }


    @action
    decrementCounter2() {
        this.counter2--;
    }


    /* @action
     incrementCount() {
         this.count = this.count + 1;
     }

     @action
     decrementCount() {
         this.count = this.count - 1;
     }*/

}

const globalStore = new GlobalStore();

export default globalStore
