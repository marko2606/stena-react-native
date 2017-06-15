import axios from 'axios';

const url = 'https://api.myjson.com/bins/ehck3';

class DataService {
    getAllData() {
        return axios({
            url,
            method: 'GET'
        });
    }
}

export default new DataService();