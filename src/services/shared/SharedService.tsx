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

export function getThreeDigitNumber(pIpAddr: any) {
    let tempList = pIpAddr.split(".")
    console.log("tempList===>", tempList);

    let threeDigitAddress = tempList[0] + "." + tempList[1] + "." + tempList[2]

    return threeDigitAddress;
}


export function getFourthDigitNumber(pIpAddr: any) {
    let tempList = pIpAddr.split(".")

    return tempList[3];
}


export default async function getMelonList(url = 'chart/week/index.htm?classCd=GN1300') {
    return await axios({
        method: 'get',
        url: url,
        timeout: 1000 * 10,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).then(response => {
        let finalResults: any = [];
        let dataList = response.data;
        const $ = cheerio.load(dataList);
        $('table > tbody > tr').each(function () {
            // @ts-ignore
            var one = $(this).html();
            // @ts-ignore
            let image = $(this).find('img').attr('src');
            // @ts-ignore
            let title = $(this).find('.rank01 > span > a').attr('title').replace('재생', '');
            // @ts-ignore
            let artist = $(this).find('.wrap_song_info > .rank02 > a').text();
            finalResults.push({
                image: image,
                title: title,
                artist: artist,
            });
        });
        console.log('temp-===>', finalResults);
        return finalResults;

    }).catch(err => {
        console.log('temp-===>', err);
    });

}

