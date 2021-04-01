import {
  SET_IMAGES,
} from './actionTypes';

export const setImages = (data) => {
  return {
    type: SET_IMAGES,
    data: data
  }
}