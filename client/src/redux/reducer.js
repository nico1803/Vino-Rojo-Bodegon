
import { GET_FOODS, GET_USER, POST_FOOD, FOOD_BY_TYPE,EDIT_FOOD, GET_FOODS_BY_NAME, CART_ADD, CART_REMOVE, CART_UP, CART_DOWN,DRINK_BY_TYPE,GET_DRINKS, DISABLE_FOOD, ABLE_FOOD, GET_ABLE_FOOD, VERIFY_ADMIN } from "./actions";


const initialState = {
    allFoods: [],
    foods: [],
    user: [],
    token: [],
    cart: [],
    numberCart: 0,
    drinks:[]
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FOODS: {
            return {
                ...state,
                allFoods: action.payload,
            }
        }
        case GET_FOODS_BY_NAME:
            return {
                ...state,
                allFoods: action.payload
            }
        case GET_USER: {
            return {
                ...state,
                user: action.payload,
            }
        }
        case POST_FOOD:
            return {
                ...state,
                allFoods: [action.payload, ...state.allFoods]
            }
        case FOOD_BY_TYPE: {
            return {
                ...state,
                allFoods: action.payload
            }
        }
        case EDIT_FOOD:
            return {
                ...state,
            };
        case CART_ADD: {
            if (state.numberCart === 0) {
                let cart = {
                    id: action.payload._id,
                    quantity: 1,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.price
                }
                state.cart.push(cart);
            }
            else {
                let check = false;
                state.cart.forEach((item, key) => {
                    if (item.id === action.payload._id) {
                        state.cart[key].quantity++;
                        check = true;
                    };
                });
                if (!check) {
                    let _cart = {
                        id: action.payload._id,
                        quantity: 1,
                        name: action.payload.name,
                        image: action.payload.image,
                        price: action.payload.price
                    }
                    state.cart.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        }
        case CART_REMOVE: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case CART_UP:
            state.numberCart++
            state.cart[action.payload].quantity++;

            return {
                ...state
            }
        case CART_DOWN:
            let quantity = state.cart[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.cart[action.payload].quantity--;
            }
        case GET_ABLE_FOOD:
            return {
                ...state,
                allFoods: action.payload
            }
        case VERIFY_ADMIN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}