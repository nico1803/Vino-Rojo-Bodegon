import axios from 'axios';

export const GET_FOODS = 'GET_FOODS'
export const GET_USER = 'GET_USER'
export const POST_FOOD = 'POST_FOOD'
export const FOOD_BY_TYPE = 'FOOD_BY_TYPE'

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

export function postFood(payload){
    return async function(dispatch){
      await axios.post('/foods.routes',payload)
        dispatch ({
            type: 'POST_FOOD',
            payload
        })
    }
}

export function foodTypes(payload) {
    return async function(dispatch){
        await axios.get(`http://localhost:3001/filters/${payload}`)
        dispatch ({
            type: 'FOOD_BY_TYPE',
            payload
        })
    };
};

