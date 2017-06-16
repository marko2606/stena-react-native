import {
    FILTER_GROUPS
} from '../../actions/types';

export function changeFilterGroup(dispatch) {
    dispatch({
        type: FILTER_GROUPS,
        payload: true
    })
}