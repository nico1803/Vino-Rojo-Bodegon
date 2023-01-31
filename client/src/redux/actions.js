import axios from 'axios';

export const GET_FOODS = 'GET_FOODS'
export const GET_USER = 'GET_USER'
export const POST_FOOD = 'POST_FOOD'
export const FOOD_BY_TYPE = 'FOOD_BY_TYPE'
export const GET_FOODS_BY_NAME = 'GET_FOODS_BY_NAME'
export const CART_ADD = 'CART_ADD'
export const CART_REMOVE = 'CART_REMOVE'
export const CART_UP = 'CART_UP'
export const CART_DOWN = 'CART_DOWN'


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

export function getFoodsByName(name){
    return async function(dispatch){
       try{
        const resu =  await axios.get(`http://localhost:3001/foods?name=${name}`)
        dispatch({
            type: "GET_FOODS_BY_NAME",
            payload: resu.data
        })
       } 
       catch(error){
        console.log(`el ${name} no existe`)
       }
    }
}

export function cartAdd(payload){
    return async function(dispatch){
        dispatch({
            type: 'CART_ADD',
            payload
        })
    }
}

export function cartRemove(payload){
    return async function(dispatch){
        dispatch({
            type: 'CART_REMOVE',
            payload
        })
    }
}

export function cartUp(payload){
    return async function(dispatch){
        dispatch({
            type: 'CART_UP',
            payload
        })
    }
}

export function cartDown(payload){
    return async function(dispatch){
        dispatch({
            type: 'CART_DOWN',
            payload
        })
    }
}
