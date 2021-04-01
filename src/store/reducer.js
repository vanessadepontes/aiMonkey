import { ActionSheetIOS } from 'react-native';
import { combineReducers } from 'redux';

import {
  SET_IMAGES,
  SET_DETAILS,
} from './actionTypes';

const initialState = {
  data: [],
  detail: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
		case SET_IMAGES:
			return {
				...state, 
        data: action.data,
        
			}

      case SET_DETAILS:
			return {
				...state, 
        detail: action.detail,
        
			}

			default:
				return state;
  	}
};

export default combineReducers({
  redux: reducer
});