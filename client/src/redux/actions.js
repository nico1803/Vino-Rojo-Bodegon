import axios from 'axios';
import swal from "sweetalert";


export const GET_FOODS = 'GET_FOODS';
export const GET_USER = 'GET_USER';
export const POST_FOOD = 'POST_FOOD';
export const FOOD_BY_TYPE = 'FOOD_BY_TYPE';
export const EDIT_FOOD = 'EDIT_FOOD';
export const GET_FOODS_BY_NAME = 'GET_FOODS_BY_NAME';
export const CART_ADD = 'CART_ADD';
export const CART_REMOVE = 'CART_REMOVE';
export const CART_UP = 'CART_UP';
export const CART_DOWN = 'CART_DOWN';
export const DRINK_BY_TYPE = 'DRINK_BY_TYPE';
export const GET_DRINKS = 'GET_DRINKS';
export const DISABLE_FOOD = 'DISABLE_FOOD';
export const ABLE_FOOD =  'ABLE_FOOD';
export const GET_ABLE_FOOD = 'GET_ABLE_FOOD';
export const VERIFY_ADMIN = 'VERIFY_ADMIN';


//RUTA RAILWAY: https://vino-rojo-bodegon-production.up.railway.app/foods


export const getFoods = () => {
    return async (dispatch) => {
        try {
            let data = await axios.get('/foods');       
            return dispatch({ type: GET_FOODS, payload: data.data });
        } catch(e) {
            console.error(e);
        }
    }
};
<<<<<<< HEAD
export const getDrinks = () => {
    return async (dispatch) => {
        try {
            let data = await axios.get('http://localhost:3001/drinks');       
            return dispatch({ type: GET_DRINKS, payload: data.data });
        } catch(e) {
            console.error(e);
        }
    }
};
=======

>>>>>>> 8a755eff40aa40aec0d3076b607b2a9c3fd5ba40

export function getUser(id){
    return async function(dispatch) {
        let user = await axios.get(`/login/customers/${id}`)
        console.log(user.data);
        return dispatch({
            type: 'GET_USER',
            payload: user.data
        })
    }
};
export function editFood(id, foodEditada) {
    return async function (dispatch) {
      try {
        const json = await axios.put(`/foods/edit/${id}`, foodEditada);
        return dispatch({
          type: 'EDIT_FOOD',
          payload: json.data,
        });
      } catch (error) {
        console.log("No pude modificar ela comida", error);
      }
    };
  }
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
        const filtered = await axios.get(`/filters/${payload}`)
        dispatch ({
            type: 'FOOD_BY_TYPE',
            payload: filtered.data
        })
    };
};
export function drinksTypes(payload) {
    return async function(dispatch){
        const filtered = await axios.get(`/drinks`)
        dispatch ({
            type: 'DRINK_BY_TYPE',
            payload: filtered.data
        })
    };
};

export function getFoodsByName(name){
    return async function(dispatch){
       try{
        const resu =  await axios.get(`/foods?name=${name}`)
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
    let id = localStorage.getItem('userId')
    if(id) {
        return async function(dispatch){
            dispatch({
                type: 'CART_ADD',
                payload
            })
        console.log(payload);
        await axios.put(`/login/updateCart/${id}`, payload)
        }
    } else {
        swal({
            title: "Oppps...",
            text: "Tienes que tener tu sesión inciada para agregar cosas al carrito",
            icon: "error",
            dangerMode: true,
            timer: 3000
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

export function disableFood(id) {
    return async function(dispatch){
        const disabled = await axios.get(`/foods/disableFood/${id}`)
        console.log(disabled.data);
        dispatch ({
            type: 'DISABLE_FOOD',
            payload: disabled.data
        })
    };
};

export function ableFood(id) {
    return async function(dispatch){
        const abled = await axios.get(`/foods/ableFood/${id}`)
        console.log(abled.data);
        dispatch ({
            type: 'ABLE_FOOD',
            payload: abled.data
        })
    };
};

export function getAbleFood() {
    return async function(dispatch){
        let data = await axios.get('foods/able')
        dispatch ({
            type: 'GET_ABLE_FOOD',
            payload: data.data
        })
    };
};

export function verifyAdmin() {
    return async function(dispatch){
        try {
            let token = localStorage.getItem('token')
            let verify = await axios.get(`http://localhost:3001/login/verifyAdmin/${token}`)
            dispatch ({
                type: 'VERIFY_ADMIN',
                payload: verify.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

