// @flow
import * as React from 'react';
import axios from "axios";

type Props = {};
type State = {};

class TestService {

    getPostList = async () => {
        try {
            return await axios({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/posts',
                timeout: 1000 * 10,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(response => {
                return response.data;
            })
        } catch (e) {
            return [];
        }
    }


    render() {
        return (
            <div>

            </div>
        );
    };
};


const testService = new TestService();

export default testService;