import { ActionSheetIOS } from 'react-native';
import { combineReducers } from 'redux';

import {
  SET_IMAGES,
} from './actionTypes';

const initialState = {
  data: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
		case SET_IMAGES:
			return {
				...state, 
        data: action.data,
        
			}

			default:
				return state;
  	}
};

export default combineReducers({
  redux: reducer
});