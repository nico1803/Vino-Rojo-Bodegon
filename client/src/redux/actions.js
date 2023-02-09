import axios from 'axios';
import swal from "sweetalert";


export const GET_FOODS = 'GET_FOODS';
export const GET_USER = 'GET_USER';
export const POST_FOOD = 'POST_FOOD';
export const FOOD_BY_TYPE = 'FOOD_BY_TYPE';
export const MIN_MAX = "MIN_MAX";
export const MAX_MIN = "MAX_MIN";
export const EDIT_FOOD = 'EDIT_FOOD';
export const GET_FOODS_BY_NAME = 'GET_FOODS_BY_NAME';
export const CART_ADD = 'CART_ADD';
export const CART_REMOVE = 'CART_REMOVE';
export const CART_UP = 'CART_UP';
export const CART_DOWN = 'CART_DOWN';
// export const DISABLE_FOOD = 'DISABLE_FOOD';
// export const ABLE_FOOD =  'ABLE_FOOD';
export const GET_ABLE_FOOD = 'GET_ABLE_FOOD';
export const VERIFY_ADMIN = 'VERIFY_ADMIN';

//RUTA RAILWAY: ${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}foods


export const getFoods = () => {
    return async (dispatch) => {
        try {
            let data = await axios.get(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}foods`);       
            return dispatch({ type: GET_FOODS, payload: data.data });
        } catch(e) {
            console.error(e);
        }
    }
};

export function getUser(id){
    return async function(dispatch) {
        let user = await axios.get(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}login/customers/${id}`)
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
        const json = await axios.put(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}foods/edit/${id}`, foodEditada);
        return dispatch({
          type: 'EDIT_FOOD',
          payload: json.data,
        });
      } catch (error) {
        console.log("No puede modificar la comida", error);
      }
    };
  }
export function postFood(payload){
    return async function(dispatch){
      await axios.post(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}foods.routes`,payload)
        dispatch ({
            type: 'POST_FOOD',
            payload
        })
    }
}

export function foodTypes(payload) {
    return async function(dispatch){
        const filtered = await axios.get(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}filters/${payload}`)
        dispatch ({
            type: 'FOOD_BY_TYPE',
            payload: filtered.data
        })
    };
};

export function priceMintoMax() {
    return async function(dispatch){
        const Ordered = await axios.get(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}filters/priceMinMax`)
        dispatch({
            type: "MIN_MAX",
            payload: Ordered.data
        })
    } 
}

export function priceMaxtoMin(){
    return async function(dispatch){
        const Ordered = await axios.get(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}filters/priceMaxMin`)
        dispatch({
            type: "MAX_MIN",
            payload: Ordered.data
        })
    }
}

export function getFoodsByName(name){
    return async function(dispatch){
       try{
        const resu =  await axios.get(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}foods?name=${name}`)
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
        await axios.put(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}/login/updateCart/${id}`, payload)
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

export function getAbleFood() {
    return async function(dispatch){
        let data = await axios.get(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}foods/able`)
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
            let verify = await axios.get(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}login/verifyAdmin/${token}`)
            if(dispatch){
                dispatch ({
                    type: 'VERIFY_ADMIN',
                    payload: verify.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
};

