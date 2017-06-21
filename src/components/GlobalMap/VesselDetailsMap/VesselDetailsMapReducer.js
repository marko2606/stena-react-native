import { VESSEL_DETAILS_MAP } from '../../../actions/types';

const INITIAL_STATE = {
    footerHeight: '10%',
    mapHeight: '90%',
    isFooterSelectionOpen: false,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case VESSEL_DETAILS_MAP.TOGGLE_FOOTER:
            let {footerHeight, mapHeight, isFooterSelectionOpen} = state;
            const smallFooterHeight = '10%';
            const largeFooterHeight = '70%';
            const smallMapHeight = '30%';
            const largeMapHeight = '90%';
            if(state.isFooterSelectionOpen) {
                footerHeight = smallFooterHeight;
                mapHeight = largeMapHeight;
                isFooterSelectionOpen = !state.isFooterSelectionOpen;
            } else {
                footerHeight = largeFooterHeight;
                mapHeight = smallMapHeight;
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