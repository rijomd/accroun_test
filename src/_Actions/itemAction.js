import { userConstants } from '../_Constants'
import axios from 'axios';


export const itemList = () => {

    return async function saveNewTodoThunk(dispatch, getState) {

        await dispatch({ type: userConstants.ITEMLIST_REQUEST });
        let response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        if (response.status === 200) {
            let payload = response.data;
            await dispatch({
                type: userConstants.ITEMLIST_SUCCESS,
                payload: payload,
                count: payload.length
            });
        }
        return response;
    }

}

