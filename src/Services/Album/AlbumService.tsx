import * as React from 'react';
import axios from "axios";
import {ALBUM_FETCH_URL} from "../../Constants/SharedContants";

class AlbumService {
    getAlbumList = async () => {
        try {
            return await axios({
                method: 'get',
                url: ALBUM_FETCH_URL,
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
