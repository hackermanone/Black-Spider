export const UPDATE_PERCENTAGE = "updatePercentage";
export const ADD_PERCENTAGE = "addPercentage";

export function updatePercentage(percentage) {
    return {
        type: UPDATE_PERCENTAGE,
        percentage: percentage
    }
}

export function addPercentage(amount, currPercentage) {
    if (currPercentage + amount <= 100) {
        return {
            type: ADD_PERCENTAGE,
            percentage: amount
        }        
    } else {
        return {
            type: ADD_PERCENTAGE,
            percentage: 0,
        };
    }
    }