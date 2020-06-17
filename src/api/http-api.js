import { HttpBase } from "./https-base";


export class HttpApiService extends HttpBase {

    getCovidCountStateWise = async () => {
        return this.getApi('https://api.covid19india.org/data.json');
    }

    getCovidCountDistricWise = async () => {
        return this.getApi('https://api.covid19india.org/state_district_wise.json')
    }

    getNewsData = async() => {
        return this.getApi('https://newsapi.org/v2/top-headlines?country=in&apiKey=c76f329d7be742fe835e2b635ebb8928')
    }

}