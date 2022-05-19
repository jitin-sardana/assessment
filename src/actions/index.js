import axios from 'axios';
import AlertBox from '../Components/SharedComponents/AlertBox';
import {
    LOADING,
    GET_UPLOADED_CATS,
    GET_UPLOADED_CATS_FAILURE,
    GET_UPLOADED_CATS_SUCCESS,
    GET_FAVOURITE_CATS,
    GET_FAVOURITE_CATS_SUCCESS,
    GET_FAVOURITE_CATS_FAILURE
} from './actionType';

export const getUploadedCats = () => {
    return (dispatch) => {
        dispatch({ type: GET_UPLOADED_CATS });
        return axios.get('https://api.thecatapi.com/v1/images/search?limit=10&size=small&mime_types=gif,png', {
            headers: {
                'x-api-key': 'd0dda002-a6b0-4f93-be7a-a334e1322830'
            }
        }).then(
            response => dispatch({ type: GET_UPLOADED_CATS_SUCCESS, payload: response.data }),
            error => dispatch({ type: GET_UPLOADED_CATS_FAILURE, payload: error })
        );
    };
};

export const getFavouriteCats = () => {
    return (dispatch) => {
        dispatch({ type: GET_FAVOURITE_CATS });
        return axios.get('https://api.thecatapi.com/v1/favourites', {
            headers: {
                'x-api-key': 'd0dda002-a6b0-4f93-be7a-a334e1322830'
            }
        }).then(
            response => dispatch({ type: GET_FAVOURITE_CATS_SUCCESS, payload: response.data }),
            error => dispatch({ type: GET_FAVOURITE_CATS_FAILURE, payload: error })
        );
    };
};

export const updateFavouriteImage = (id) => {
    return (dispatch) => {
        dispatch({ type: LOADING, payload: true });
        return axios.post('https://api.thecatapi.com/v1/favourites', { image_id: id }, {
            headers: {
                'x-api-key': 'd0dda002-a6b0-4f93-be7a-a334e1322830'
            }
        }).then(
            response => {
                dispatch({ type: LOADING, payload: false });
                AlertBox('success','Image added to Favourites');
            }
        );
    };
};

export const deleteFavouriteImage = (id) => {
    return (dispatch) => {
        dispatch({ type: LOADING, payload: true });
        return axios.delete(`https://api.thecatapi.com/v1/favourites/${id}`, {
            headers: {
                'x-api-key': 'd0dda002-a6b0-4f93-be7a-a334e1322830'
            }
        }).then(
            response => {
                dispatch({ type: LOADING, payload: false });
                AlertBox('success','Image removed from Favourites');
                dispatch(getFavouriteCats())
            }
        );
    };
};