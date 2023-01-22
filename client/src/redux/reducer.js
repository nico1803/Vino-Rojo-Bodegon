import { GET_FOODS, GET_USER } from "./actions";

let initialState = {
    allFoods: [],
    user:[],
}

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_FOODS:{
            return{
               ...state,
            foods: action.payload,
            }
        }
        case GET_USER:{
            return{
               ...state,
            user: action.payload,
            }
        }
    }
}