import axios from 'axios';

export const GET_FOODS = 'GET_FOODS'
export const GET_USER = 'GET_USER'
export const POST_FOOD = 'POST_FOOD'
export const FOOD_BY_TYPE = 'FOOD_BY_TYPE'

export const getFoods = () => {
    return async (dispatch) => {
        try {      
            let data = await axios.get('http://localhost:3001/foods');       
            return dispatch({ type: GET_FOODS, payload: data.data });
        } catch(e) {
            console.error(e);
        }
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
        const filtered = await axios.get(`http://localhost:3001/filters/${payload}`)
        dispatch ({
            type: 'FOOD_BY_TYPE',
            payload: filtered.data
        })
    };
};

