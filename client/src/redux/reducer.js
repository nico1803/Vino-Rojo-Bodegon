import { GET_FOODS } from "./actions";

let initialState = {
    allFoods: [],
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case GET_FOODS:{
            return{
               ...state,
            foods: action.payload,
            }
        }
    }
}