import { ActionType } from '../actions/index'

export const ReducerWeather = function (state, action) {
    //console.log(`Action:`, action)
    switch (action.type) {
        case ActionType.FETCH_WEATHER:
            if (!state) state = []
            state = [action.payload.data, ...state]
            break
        default:
            state = []
    }
    // state = null
    return state
}