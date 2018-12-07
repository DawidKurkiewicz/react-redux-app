const FIRST_INPUT = "FIRST_INPUT"
const SECOND_INPUT = "SECOND_INPUT"


const INITIAL_STATE = {
    first: 0,
    second: 0
}

export const addFirstInput = value => ({
    type: FIRST_INPUT,
    value: Number(value)
})
export const addSecondInput = value => ({
    type: SECOND_INPUT,
    value: Number(value)
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