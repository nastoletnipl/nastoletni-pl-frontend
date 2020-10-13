import axios from 'axios';
import firebase from "firebase";

const client = axios.create({
    baseURL: 'http://localhost:8000',
    json: true
})

export default class ApiCaller {
    static async callApi(url, method, data = {}) {
        let formData = new FormData();
        for (let k in data) {
            formData.append(k, data[k]);
        }

        let token = "";
        if(firebase.auth().currentUser) firebase.auth().currentUser.getIdToken(true).then(idToken => token = idToken);

        return client({
            method: method,
            url: url,
            data: formData,
            headers: {
                'AuthToken': token
            }
        });
    }
}