import { AnyAction } from '@reduxjs/toolkit'

const initialState = {}

const listReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        default:
            return state
    }
}

export default listReducer
