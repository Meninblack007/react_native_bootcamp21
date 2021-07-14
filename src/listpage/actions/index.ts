import { LIST } from '../../constants'
import { UIState } from '../../types'
import { AppDispatch, RootState } from '../../store'

// Fetch list details
export const fetchListDetails = () => async (dispatch: AppDispatch, state: RootState) => {
    try {
        const response = await fetch('https://api.jsonbin.io/b/60edc359a917050205c697f0')
        const data = await response.json()
        dispatch({
            type: LIST,
            payload: {
                uiState: UIState.FINISHED,
                data: data,
            },
        })
    } catch (error) {
        dispatch({
            type: LIST,
            payload: {
                uiState: UIState.ERROR,
                data: [],
            },
        })
    }
}
