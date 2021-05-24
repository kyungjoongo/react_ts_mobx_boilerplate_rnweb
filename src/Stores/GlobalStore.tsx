import {observable, action} from "mobx";
import {autobind} from 'core-decorators';
import * as Realm from "realm-web";


class GlobalStore {
    constructor() {

    }


    @observable count = 0;

    @observable counter2 = 5;

    @action
    setCounter2(value: number) {
        this.counter2 = value
    }

    @action
    incrementCount() {
        this.count = this.count + 1;
    }

    @action
    decrementCount() {
        this.count = this.count - 1;
    }

}

const globalStore = new GlobalStore();

export default globalStore
