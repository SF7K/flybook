import axios from 'axios';

const headers  = {
    'Content-Type': 'application/json',
};

const burl = 'http://192.168.10.20:8800'; // Adresse du serveur - ici une VM sur l'ip 192.168.10.20

export default {
    
    login: function(email, password) {
        return axios.post(`${burl}/user/login`, {email, password,},{headers: headers});
    },
    
    register: function(user) {
        return axios.post(`${burl}/user/register`, user, {headers: headers});
    },
    
    isAuth: function() {
        return localStorage.getItem('token') !== null;
    },
    
    logout: function() {
        localStorage.clear();
    },

    addFlight: function(flight) {
        return axios.post(`${burl}/flights/add`, flight, {headers: headers});
    },

    readFlights: function() {
        return axios.get(`${burl}/flights/read`, {headers: headers});
    },

    // updateFlight: function(flight) {
    //     axios.get(`${burl}/flights/${flight.id}`, {headers: headers});
    //     return axios.post(`${burl}/flights/${flight.id}`, flight, {headers: headers});
    // },

    // delFlight: function(flight) {
    //     return axios.delete(`${burl}/flights/${flight.id}`);
    // }
};