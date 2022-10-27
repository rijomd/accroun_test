import { userConstants } from '../_Constants'

const initialState = {
    itemArray: [],
    isListing: false,
}

export const itemReducer = (state = initialState, action) => {

    switch (action.type) {
        //listing items
        case userConstants.ITEMLIST_REQUEST:
            state = {
                ...state,
                isListing: true,
                itemArray: [],
            }
            break;
        case userConstants.ITEMLIST_SUCCESS:
            state = {
                ...state,
                isListing: false,
                itemArray: action.payload,
            }
            break;
    }

    return state;
}