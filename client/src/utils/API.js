import axios from "axios";

export default {
  // Gets all posts
    getNums: function() {
        return axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            url: '/',
        })
    }


};