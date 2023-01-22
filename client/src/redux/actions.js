import axios from 'axios';

export const GET_FOODS = 'GET_FOODS'
export const GET_USER = 'GET_USER'

export function getFoods(){
    return async function(dispatch) {
        const json = await axios.get('http://localhost:3001/foods');
        console.log("aca", json)
        return dispatch({
            type: 'GET_FOODS',
            payload: json.data

        })
    }
};

export function getUser(user){
    console.log('user form actions: ', user)
    return function(dispatch) {
        return dispatch({
            type: 'GET_USER',
            payload: user

        })
    }
};

