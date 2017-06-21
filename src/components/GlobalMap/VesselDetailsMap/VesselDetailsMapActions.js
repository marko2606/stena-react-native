import {VESSEL_DETAILS_MAP} from '../../../actions/types'

export function displayFooterSelectionDetailsAction(dispatch) {
    dispatch({
        type: VESSEL_DETAILS_MAP.TOGGLE_FOOTER
    })
}