import { SHIP_DETAILS_MAP } from '../../../actions/types';

const INITIAL_STATE = {
    footerHeight: '10%',
    mapHeight: '90%',
    isFooterSelectionOpen: false,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SHIP_DETAILS_MAP.TOGGLE_FOOTER:
            let {footerHeight, mapHeight, isFooterSelectionOpen} = state;
            if(state.isFooterSelectionOpen) {
                footerHeight = '10%';
                mapHeight = '90%';
                isFooterSelectionOpen = !state.isFooterSelectionOpen;
            } else {
                footerHeight = '70%';
                mapHeight = '30%';
                isFooterSelectionOpen = !state.isFooterSelectionOpen;
            }
            return Object.assign({}, state, {
                footerHeight,
                mapHeight,
                isFooterSelectionOpen
            });
        default:
            return state;
    }
}