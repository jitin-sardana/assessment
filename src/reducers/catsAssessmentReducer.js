import {
  LOADING,
  GET_UPLOADED_CATS,
  GET_UPLOADED_CATS_FAILURE,
  GET_UPLOADED_CATS_SUCCESS,
  GET_FAVOURITE_CATS,
  GET_FAVOURITE_CATS_SUCCESS,
  GET_FAVOURITE_CATS_FAILURE
} from '../actions/actionType';

export const initialState = {
  loading: false,
  catsList: null,
  favCatsList: null
}

export default function orderManagementReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case GET_UPLOADED_CATS:
      return {
        ...state,
        loading: true
      }
    case GET_UPLOADED_CATS_SUCCESS:
      return {
        ...state,
        loading: false,
        catsList: action.payload
      }
    case GET_UPLOADED_CATS_FAILURE:
      return {
        ...state,
        loading: false,
      }
      case GET_FAVOURITE_CATS:
      return {
        ...state,
        loading: true
      }
    case GET_FAVOURITE_CATS_SUCCESS:
      return {
        ...state,
        loading: false,
        favCatsList: action.payload
      }
    case GET_FAVOURITE_CATS_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}