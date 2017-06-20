import {SHIP_DETAILS_MAP} from '../../../actions/types'

export function displayFooterSelectionDetailsAction(dispatch) {
    dispatch({
        type: SHIP_DETAILS_MAP.TOGGLE_FOOTER
    })
}