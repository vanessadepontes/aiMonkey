import {
  SET_IMAGES,
  SET_DETAILS,
} from './actionTypes';

export const setImages = (data) => {
  return {
    type: SET_IMAGES,
    data: data
  }
}

export const setDetails = (data) => {
  return {
    type: SET_DETAILS,
    detail: data
  }
}