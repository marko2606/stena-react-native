import {
    SHIP_GET_DATA
} from '../../actions/types';

export function getData(dispatch) {
    dispatch({
        type: SHIP_GET_DATA.GET_DATA
    })
}