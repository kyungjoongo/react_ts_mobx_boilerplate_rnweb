import {action, observable} from "mobx";


class GridRowStore {

    @observable rows = [
        {id: 1, mac: '2f:22:33:44:55', sn: '3129012asddkj', ip: '192.168.0.1', gateway: '255.255.221.0'},
        {id: 2, mac: '2f:22:33:44:52', sn: '132234sfsdf', ip: '192.168.0.2', gateway: '255.255.221.0'},
        {id: 3, mac: '2f:22:33:44:53', sn: '21342134sdfg', ip: '192.168.0.3', gateway: '255.255.221.0'},
        {id: 4, mac: '2f:22:33:44:57', sn: '234324fsdgs1234', ip: '192.168.0.4', gateway: '255.255.221.0'},
        {id: 5, mac: '2f:22:33:44:53', sn: '12341234asdf', ip: '192.168.0.5', gateway: '255.255.221.0'},
        {id: 6, mac: '2f:22:33:44:54', sn: '3129012asddkj', ip: '192.168.0.6', gateway: '255.255.221.0'},

    ]

    @action
    setRows(pArrayList: any) {
        this.rows = pArrayList

    }

}

const gridRowStore = new GridRowStore()

export default gridRowStore
