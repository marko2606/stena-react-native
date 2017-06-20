import {
    VESSEL_ACTION_TYPES
} from '../../actions/types';

export function getData(dispatch) {
    dispatch({
        type: VESSEL_ACTION_TYPES.GET_DATA
    })
}