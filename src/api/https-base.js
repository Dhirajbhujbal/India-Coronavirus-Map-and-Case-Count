export class HttpBase {

    postApi(endPoint) {
        return fetch(endPoint).then( (data) =>  data.json() ).then( (response) => response)
    }

    getApi(endPoint) {
        return fetch(endPoint).then( (data) =>  data.json() ).then( (response) => response).catch((error) => {console.log(123)})
    }

}