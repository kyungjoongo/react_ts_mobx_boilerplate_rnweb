import {action, observable} from "mobx";


class AlbumStore {

    @observable albumList = []

    @action
    setAlbumList(pArrayList: any) {
        this.albumList = pArrayList
    }


}

const albumStore = new AlbumStore();

export default albumStore
