import * as React from 'react';
import axios from "axios";
import {ALBUM_FETCH_URL} from "../../constants/SharedContants";

class AlbumService {
    getAlbumList = async () => {
        try {
            return await axios({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/albums',
                timeout: 1000 * 10,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(response => (response.data))
        } catch (e) {
            alert(e.toString())
        }
    }

};


const albumService = new AlbumService();

export default albumService;
