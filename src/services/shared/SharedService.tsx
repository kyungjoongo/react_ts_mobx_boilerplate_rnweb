import axios from "axios";
import cheerio from "cheerio";
import gridRowStore from "../../stores/GridRowStore";

export const getList = async () => {
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

export function getFirstThreeDigitNumber(pIpAddr: any) {
    let tempList = pIpAddr.split(".")
    let threeDigitAddress = tempList[0] + "." + tempList[1] + "." + tempList[2]
    return threeDigitAddress;
}

export function getFourthDigitNumber(pIpAddr: any) {
    let tempList = pIpAddr.split(".")
    return tempList[3];
}

export function rand() {
    return Math.round(Math.random() * 20) - 10;
}

export function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}