import {action, observable} from "mobx";


class GlobalStore {

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


    /*@observable count = 0;*/
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
