import {action, observable} from "mobx";


class TestStore {

    @observable testCount = 0;

    @action
    setTestCount(value: number) {
        this.testCount = value;
    }

    @action
    incrementTestCount() {
        this.testCount++;
    }

    @action
    decrementTestCount() {
        this.testCount--;
    }

}

const testStore = new TestStore();

export default testStore
