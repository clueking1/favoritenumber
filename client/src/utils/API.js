import axios from "axios";

export default {
  // Gets all posts
    getNums: function() {
        return axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            url: '/',
        })
    },
    next: function(postdata) {
        return axios({
            method: 'put',
            headers: { 'content-type': 'application/json' },
            url: '/',
            data: postdata
        })
    },
};