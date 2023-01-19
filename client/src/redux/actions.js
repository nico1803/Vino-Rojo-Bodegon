import axios from 'axios';

export const GET_FOODS = 'GET_FOODS'

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