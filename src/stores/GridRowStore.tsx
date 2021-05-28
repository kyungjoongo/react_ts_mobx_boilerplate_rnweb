import {action, observable} from "mobx";


class GridRowStore {

    @observable rows = [
        {id: 1, mac: '2f:22:33:44:55', sn: '3129012asddkj', ip: '', gateway: '255.255.221.0'},
        {id: 2, mac: '2f:22:33:44:52', sn: '132234sfsdf', ip: '', gateway: '255.255.221.0'},
        {id: 3, mac: '2f:22:33:44:53', sn: '21342134sdfg', ip: '', gateway: '255.255.221.0'},
        {id: 4, mac: '2f:22:33:44:57', sn: '234324fsdgs1234', ip: '', gateway: '255.255.221.0'},
        {id: 5, mac: '2f:22:33:44:53', sn: '12341234asdf', ip: '', gateway: '255.255.221.0'},
        {id: 6, mac: '2f:22:33:44:54', sn: '3129012asddkj', ip: '', gateway: '255.255.221.0'},

    ]

    @observable selectedRows = []

    @observable ipAddress: string = '0.0.0.0';


    @action
    setIpAddress(value: string) {
        this.ipAddress = value;
    }

    @action
    setSelectedRows(paramArrayList: any) {
        this.selectedRows = paramArrayList;
    }

    @action
    setRows(pArrayList: any) {
        this.rows = pArrayList

    }


    //todo: ####################
    //todo: 프로젝트 rows properties
    //todo: ####################
    @observable projectRows = [
        {id: 1, project: '한화테크윈', date: '2021-05-28', members: ['고경준', '황진하', '천재', '키보드워리어']},
        {id: 2, project: '한화테크윈2', date: '2021-05-28', members: ['고경준2', '황진하', '천재', '데니스']},
        {id: 3, project: '한화테크윈3', date: '2021-05-28', members: ['고경준', '황진하3', '천재', '제시카 알바']},
        {id: 4, project: '한화에어로', date: '2021-05-28', members: ['고경준', '황진하4', '천재5', '키보드워리어2']},
        {id: 5, project: '한화이글스', date: '2021-05-28', members: ['고경준', '황진하4', '천재', '엘론머스크', '빌게이츠']},
    ]

    @action
    setProjectdRows(pArrayList: any) {
        this.projectRows = pArrayList;
    }

}

const gridRowStore = new GridRowStore()

export default gridRowStore
