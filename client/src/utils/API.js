import axios from "axios";

export default {
  // Gets all posts
    createUser: function() {
        return axios({
            method: 'get',
            headers: { 'content-type': 'application/json' },
            url: '/',
        })
    }


};