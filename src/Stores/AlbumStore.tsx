import {action, observable} from "mobx";


class AlbumStore {

    @observable albumList = []

    @action
    setAlbumList(paramArrList: any) {
        this.albumList = paramArrList

    }

}

const albumStore = new AlbumStore()

export default albumStore
