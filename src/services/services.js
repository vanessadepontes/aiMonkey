import { setImages } from '../store/index';

export const getImages = ( page ) => {
  let url = `https://picsum.photos/v2/list?page=1&limit=1000000`;
  console.log('url', url)
  return (dispatch) => {
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    }).then((parsedRes) => {
      dispatch(setImages(parsedRes));
      return parsedRes;
    }).catch((error) => {
      alert('Hubo un error')
    });
  };
}
