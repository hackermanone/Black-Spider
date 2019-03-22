const inital_state = {
    percentage: 0,
}

export const rootReducer = (state = inital_state, action) => {
    switch(action.type) {
        case "updatePercentage":
            return {
                ...state,
                percentage: action.percentage
            };
        case "addPercentage":
            return {
                ...state,
                percentage: state.percentage + action.percentage
            }
        default:
            return state;
    }
}