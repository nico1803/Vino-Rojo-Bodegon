

import { GET_FOODS, GET_USER, POST_FOOD, FOOD_BY_TYPE, GET_FOODS_BY_NAME, CART_ADD, CART_REMOVE} from "./actions";


const initialState = {
    allFoods: [],
    foods: [],
    user:[],
    cart: [],
}

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_FOODS:{
            return{
               ...state,
            allFoods: action.payload,
            }
        }
        case GET_FOODS_BY_NAME:
            return{
                ...state,
                allFoods: action.payload
            }
        case GET_USER:{
            return{
               ...state,
            user: action.payload,
            }
        }
        case POST_FOOD:
            return{
                ...state,
                allFoods: [action.payload,...state.allFoods]
            }
        case FOOD_BY_TYPE: {
            return {
                ...state,
                allFoods: action.payload
            }
        }
        case CART_ADD: {
            let product = state.allFoods.filter(item=>item._id===action.payload)
            return {
                ...state,
                cart: state.cart.concat(product)
            }
        }
        case CART_REMOVE: {
            return {
                ...state,
                cart: state.cart.filter(item=>item._id!==action.payload)
            }
        }
        default:
            return state;
    }
}