

const INITIAL_STATE = {
    footerHeight: '10%',
    mapHeight: '90%',
    isFooterSelectionOpen: false,
    isGlobalMapActivated: true
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_FOOTER_SELECTION_DETAILS':
            let {footerHeight, mapHeight, isFooterSelectionOpen, isGlobalMapActivated} = state;
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
        case 'TOGGLE_GLOBAL_MAP_COMPONENT':
            isGlobalMapActivated = !state.isGlobalMapActivated;
            return Object.assign({}, state, {
                isGlobalMapActivated
            });
        default:
            return state;
    }
}