import {
    GET_DATA
} from '../../actions/types';

export function getData(dispatch) {
    dispatch({
        type: GET_DATA
    })
}