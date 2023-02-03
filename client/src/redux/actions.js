import axios from 'axios';

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
        alert('Tienes que tener tu sesión inciada para agregar cosas al carrito')
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
