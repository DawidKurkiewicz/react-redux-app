const FIRST_INPUT = "FIRST_INPUT"
const SECOND_INPUT = "SECOND_INPUT"


const INITIAL_STATE = {
    first: 3,
    second: 4
}

export const addFirstInput = value => ({
    type: FIRST_INPUT,
    value
})
export const addSecondInput = value => ({
    type: SECOND_INPUT,
    value
})



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FIRST_INPUT:
            return {
                ...state,
                first: action.value
            }
        case SECOND_INPUT:
            return {
                ...state,
                second: action.value
            }
        default:
            return state
    }
}