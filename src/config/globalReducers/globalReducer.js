import {
    SET_DATAS,
} from '../../common/actionTypes';

const initialState = {
   data : []
};

const globalReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      default:
        return state;
    }
  };
  
  export default globalReducer;